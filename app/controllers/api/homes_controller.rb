class Api::HomesController < ApplicationController
  def index
    @homes = Home.filter(filter_params)
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
        confirmation_email = UserMailer.trip_confirmation(current_user, @rental, Home.find(@rental.home_id))
        confirmation_email.deliver_now
        render json: {id: @rental.id, home_id: @rental.home_id, start_date: @rental.start_date, end_date: @rental.end_date}, status: 200
      else
        render json: {errors: @rental.errors.full_messages}, status: 422
      end
    end
  end

  def destroy_rental
    rental = HomeRentalRequest.find(params[:rental_id])

    if current_user.id != rental.user_id
      render json: {errors: ["That's not your reservation!"]}, status: 403
    elsif rental.destroy
      render json: {notice: "Reservation deleted", id: rental.id}, status: 200
    else
      render json: {errors: ["Something went wrong. Have you already deleted this?"]}, status: 404
    end
  end

  def create_review
    @review = Review.new(review_params)

    if @review.save
      rental = HomeRentalRequest.find(params[:review][:rental_id])
      rental.update({reviewed: true})
      render json: {id: @review.id, home_id: @review.home_id, reviewer_id: @review.reviewer_id}
    else
      render json: {errors: @review.errors.full_messages}, status: 422
    end
  end


  private

  def home_params
    params.require(:home).permit(:title, :lat, :lng, :price, :occupancy, :beds, :baths, :image_url, :host_id, :min_guests, :bounds)
  end

  def rental_params
    params.require(:rental).permit(:user_id, :id, :start_date, :end_date, :home_id)
  end

  def filter_params
    params.require(:filters).permit(:minGuests, bounds: [:northEast, :southWest], price: [:minPrice, :maxPrice], dates: [:startDate, :endDate])
  end

  def review_params
    params.require(:review).permit(:reviewer_id, :home_id, :body, :accuracy_stars, :communication_stars, :cleanliness_stars, :location_stars, :checkin_stars, :value_stars)
  end
end
