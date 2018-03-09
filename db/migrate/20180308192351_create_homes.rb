class CreateHomes < ActiveRecord::Migration[5.1]
  def change
    create_table :homes do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.text :description
      t.text :rules
      t.text :cancellations
      t.integer :baths, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :price, null: false
      t.integer :occupancy, null: false
      t.integer :beds, null: false

      t.timestamps
    end

    add_index :homes, :host_id
  end
end
