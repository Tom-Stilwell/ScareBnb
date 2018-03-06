class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render json: {id: @user.id, username: @user.username}
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  def show
  end

  def update
  end

  def destroy
  end

  private

  def user_params
      params.require(:user).permit(:username, :password_digest, :session_token, :password)
  end
end
