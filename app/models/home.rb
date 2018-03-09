class Home < ApplicationRecord
  validates :title, :lat, :lng, :price, :occupancy, :beds, presence: true

  belongs_to :host,
    class_name: "User",
    foreign_key: :host_id,
    primary_key: :id

end
