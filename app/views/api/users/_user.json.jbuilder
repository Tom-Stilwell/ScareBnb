json.extract! user, :id, :email, :birthday, :language, :school, :work, :location
json.expired_rental_ids user.expired_rentals.pluck(:id)
json.upcoming_rental_ids user.upcoming_rentals.pluck(:id)


json.rentals do
  user.rentals.each do |rental|
    json.set! rental.id do
      json.extract! rental, :id, :home_id, :user_id, :start_date, :end_date
    end
  end
end
