class AddImageToHomes < ActiveRecord::Migration[5.1]
  def change
    add_column :homes, :image_url, :string
  end
end
