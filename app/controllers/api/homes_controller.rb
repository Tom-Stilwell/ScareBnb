class Api::HomesController < ApplicationController
  def index
    # debugger
    @homes = Home.in_bounds(params[:bounds])

    if min_guests = params[:minGuests]
      @homes = @homes.select {|home| home.occupancy >= min_guests.to_i}
    end

    if price_range = params[:price]
      @homes = @homes.select {|home| home.price.between?(params[:price][:minPrice].to_i, params[:price][:maxPrice].to_i)}
    end
    start_date = params[:dates][:startDate]
    end_date = params[:dates][:endDate]

    if start_date.length > 0 && end_date.length > 0
      @homes = @homes.select do |home|
        rental = HomeRentalRequest.new(start_date: start_date, end_date: end_date, home_id: home.id)
        result = rental.dates_filter_checker;
        result
      end
    end

  end

  def create
    @home = Home.new(home_params)

    if @home.save
      render json: {id: @home.id, title: @home.title}, status: 200
    else
      render json: {errors: @home.errors.full_messages}, status: 422
    end
  end

  def show
    @home = Home.find(params[:id])

    if @home
      render :show, status: 200
    else
      render json: {errors: ["That home doesn't exist"]}, status: 404
    end
  end

  def update
    begin
      home = Home.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: {errors: ["That home doesn't exist"]}, status: 404
    end

    if home.host === current_user
      if home.update(home_params)
        render json: {id: home.id, title: home.title}, status: 200
      else
        render json: {errors: home.errors.full_messages}, status: 422
      end
    else
      render json: {errors: ["That's not your home!"]}, status: 403
    end

  end

  def destroy
    begin
      home = Home.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: {errors: ["That home doesn't exist"]}, status: 404
    end

    if home.host === current_user
      if home.destroy
        render json: {id: home.id, title: home.title}, status: 200
      else
        render json: {errors: home.errors.full_messages}, status: 422
      end
    else
      render json: {errors: ["That's not your home!"]}, status: 403
    end
  end


  def create_rental
    if params[:rental][:start_date] == "" || params[:rental][:end_date] == ""
      render json: {errors:["Date can't be blank!"]}, status: 422
    else
      permitted = rental_params
      permitted[:home_id] = params[:home_id]
      @rental = HomeRentalRequest.new(permitted)

      if @rental.save
        render json: {id: @rental.id, home_id: @rental.home_id, start_date: @rental.start_date, end_date: @rental.end_date}, status: 200
      else
        render json: {errors: @rental.errors.full_messages}, status: 422
      end
    end
  end

  def destroy_rental
    rental = HomeRentalRequest.find(params[:rental][:id])

    if current_user != rental.user_id
      render json: {errors: ["That's not your reservation!"]}, status: 403
    elsif rental.destroy
      render json: {notice: "Reservation deleted", id: rental.id}, status: 200
    else
      render json: {errors: ["Something went wrong. Have you already deleted this?"]}, status: 404
    end
  end


  private

  def home_params
    params.require(:home).permit(:title, :lat, :lng, :price, :occupancy, :beds, :baths, :image_url, :host_id, :min_guests, :bounds)
  end

  def rental_params
    params.require(:rental).permit(:user_id, :id, :start_date, :end_date, :home_id)
  end
end
