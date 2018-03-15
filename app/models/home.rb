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

  has_many :visitors,
    through: :rentals,
    source: :user

  has_many :reviews,
    class_name: "Review",
    foreign_key: :home_id,
    primary_key: :id

  has_many :reviewers,
    through: :reviews,
    source: :reviewer

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

  def self.get_review_averages(home_id)
    averages = {}
    accuracy_stars = Home.joins(:reviews).group(:id).where(id: home_id).average(:accuracy_stars)[home_id].to_f
    communication_stars = Home.joins(:reviews).group(:id).where(id: home_id).average(:communication_stars)[home_id].to_f
    cleanliness_stars = Home.joins(:reviews).group(:id).where(id: home_id).average(:cleanliness_stars)[home_id].to_f
    location_stars = Home.joins(:reviews).group(:id).where(id: home_id).average(:location_stars)[home_id].to_f
    checkin_stars = Home.joins(:reviews).group(:id).where(id: home_id).average(:checkin_stars)[home_id].to_f
    value_stars = Home.joins(:reviews).group(:id).where(id: home_id).average(:value_stars)[home_id].to_f
    averages[:accuracy_stars] = (accuracy_stars * 2.0).round / 2.0
    averages[:communication_stars] = (communication_stars * 2.0).round / 2.0
    averages[:cleanliness_stars] = (cleanliness_stars * 2.0).round / 2.0
    averages[:location_stars] = (location_stars * 2.0).round / 2.0
    averages[:checkin_stars] = (checkin_stars * 2.0).round / 2.0
    averages[:value_stars] = (value_stars * 2.0).round / 2.0
    averages[:total] = (((accuracy_stars + communication_stars + cleanliness_stars + location_stars + checkin_stars + value_stars ) / 6.0) * 2.0).round / 2.0
    averages
  end

end
