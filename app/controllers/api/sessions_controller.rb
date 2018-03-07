class Api::SessionsController < ApplicationController
  def create
   @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

   if @user
     login(@user)
     render json: {id: @user.id, email: @user.email}
   else
     render json: {errors: ["Invalid Credentials"]}, status: 422
   end
 end

 def destroy
   unless current_user
     render json: {errors: ["No current user to log out"]}, status: 404
     return
   end

   logout!
    render json: {}, status: 200
 end
end
