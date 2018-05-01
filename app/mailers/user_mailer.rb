class UserMailer < ApplicationMailer
  default from: "Tom@scarebnb.xyz"

  def trip_confirmation(user, rental, home)
    @user = user
    @trip = rental
    mail(to: @user.email, subject: "Your Upcoming Trip to '#{home.title}'")
  end
end
