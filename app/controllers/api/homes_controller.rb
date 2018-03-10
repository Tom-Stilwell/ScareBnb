class Api::HomesController < ApplicationController
  def index
    # debugger
    @homes = Home.in_bounds(params[:bounds])

    if min_guests = params[:minGuests]
      @homes = @homes.select {|home| home.occupancy >= min_guests.to_i}
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


  private

  def home_params
    params.require(:home).permit(:title, :lat, :lng, :price, :occupancy, :beds, :baths, :image_url, :host_id, :min_guests, :bounds)
  end
end
