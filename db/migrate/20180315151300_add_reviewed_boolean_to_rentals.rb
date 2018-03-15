class AddReviewedBooleanToRentals < ActiveRecord::Migration[5.1]
  def change
    add_column :home_rental_requests, :reviewed, :boolean, default: false
  end
end
