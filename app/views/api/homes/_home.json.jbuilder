json.extract! home, :id, :title, :lat, :lng, :price, :occupancy, :beds, :image_url
json.rental_ids home.rentals.pluck(:id)

json.rentals do
  home.rentals.each do |rental|
    json.set! rental.id do
      json.extract! rental, :id, :home_id, :user_id, :start_date, :end_date
    end
  end
end
