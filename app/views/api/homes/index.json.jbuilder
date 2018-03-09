@homes.each do |home|
  json.set! home.id do
    json.extract! home, :id, :title, :lat, :lng, :price, :occupancy, :beds
  end
end
