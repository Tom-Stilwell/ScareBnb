class CreateHomeRentalRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :home_rental_requests do |t|
      t.integer :home_id, null: false
      t.integer :user_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.string :status, null: false, default: "PENDING"

      t.timestamps
    end

    add_index :home_rental_requests, :home_id
    add_index :home_rental_requests, :user_id
    add_index :home_rental_requests, :start_date
    add_index :home_rental_requests, :end_date
  end
end
