class Api::RentalsController < ApplicationController

  def create
    debugger
    @rental = HomeRentalRequest.new(rental_params)

    if @rental.save
      render json: {id: @rental.id, home_id: @rental.home_id, user_id: @rental.user_id}, status: 200
    else
      render json: {errors: @rental.errors.full_messages}, status: 422
    end

  end


  def destroy
    rental = HomeRentalRequest.find(params[:rental][:id])

    if current_user != rental.user_id
      render json: {errors: ["That's not your reservation!"]}, status: 403
    elsif rental.destroy
      render json: {notice: "Reservation deleted"}, id: rental.id}, status: 200
    else
      render json: {errors: ["Something went wrong. Have you already deleted this?"]}, status: 404
    end
  end

  private

  def rental_params
    params.require(:rental).permit(:user_id, :id, :start_date, :end_date, :home_id)
  end

end
