@homes.each do |home|
  json.set! home.id do
    json.extract! home, :id, :title, :lat, :lng, :price, :occupancy, :beds
    json.image_url asset_path(home.image.url)
    json.stars Home.get_review_averages(home.id)
  end
end
