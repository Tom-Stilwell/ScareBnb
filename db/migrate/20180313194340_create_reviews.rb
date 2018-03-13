class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :accuracy_stars
      t.integer :communication_stars
      t.integer :cleanliness_stars
      t.integer :location_stars
      t.integer :checkin_stars
      t.integer :value_stars
      t.integer :reviewer_id, null: false
      t.integer :home_id, null: false

      t.timestamps
    end

    add_index :reviews, :home_id
    add_index :reviews, :reviewer_id
  end
end
