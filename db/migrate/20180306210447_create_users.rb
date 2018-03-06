class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.date :birthday
      t.string :location
      t.string :email
      t.string :phone
      t.string :work
      t.string :school
      t.string :language
      t.string :connected_account_url
      t.boolean :plus_member

      t.timestamps
    end
  end
end
