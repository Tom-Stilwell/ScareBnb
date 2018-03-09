class Home < ApplicationRecord
  validates :title, :lat, :lng, :price, :occupancy, :beds, presence: true

  belongs_to :host,
    class_name: "User",
    foreign_key: :host_id,
    primary_key: :id

  def self.in_bounds(bounds)
    # debugger
    splitSouth = bounds["southWest"][1...-1].split(", ")
    splitNorth = bounds["northEast"][1...-1].split(", ")

    minLat = splitSouth.first
    minLng = splitSouth.last
    maxLat = splitNorth.first
    maxLng = splitNorth.last

    selected = Home.where("lat < ?", maxLat).where("lat > ?", minLat).where("lng < ?", maxLng).where("lng > ?", minLng).limit(200); # limit for zoom outs
  end

end
