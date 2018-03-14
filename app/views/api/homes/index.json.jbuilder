@homes.each do |home|
  json.set! home.id do
    json.extract! home, :id, :title, :lat, :lng, :price, :occupancy, :beds, :image_url
    json.stars Home.get_review_averages(home.id)
  end
end
