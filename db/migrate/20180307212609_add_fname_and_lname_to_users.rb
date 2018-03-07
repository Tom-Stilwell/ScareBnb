class AddFnameAndLnameToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :fname, :string
    add_column :users, :lname, :string
  end
end
