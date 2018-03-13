class Home < ApplicationRecord
  validates :title, :lat, :lng, :price, :occupancy, :beds, presence: true

  belongs_to :host,
    class_name: "User",
    foreign_key: :host_id,
    primary_key: :id

  has_many :rentals,
    class_name: "HomeRentalRequest",
    foreign_key: :home_id,
    primary_key: :id,
    dependent: :destroy

  def self.filter(filters)
    splitSouth = filters[:bounds]["southWest"][1...-1].split(", ")
    splitNorth = filters[:bounds]["northEast"][1...-1].split(", ")

    minLat = splitSouth.first
    minLng = splitSouth.last
    maxLat = splitNorth.first
    maxLng = splitNorth.last

    homes = Home.where(lat: minLat..maxLat, lng: minLng..maxLng)
    .where('homes.occupancy >= ?', filters[:minGuests])
    .where(price: filters[:price][:minPrice]..filters[:price][:maxPrice])
    .limit(200)

    start_date = filters[:dates][:startDate]
    end_date = filters[:dates][:endDate]

    if !start_date.empty? && !end_date.empty?
      homes = homes.select do |home|
        rental = HomeRentalRequest.new(start_date: start_date, end_date: end_date, home_id: home.id)
        result = rental.dates_filter_checker;
        result
      end
    end

    homes
  end

end
