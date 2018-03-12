# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180312134600) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "home_rental_requests", force: :cascade do |t|
    t.integer "home_id", null: false
    t.integer "user_id", null: false
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.string "status", default: "PENDING", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["end_date"], name: "index_home_rental_requests_on_end_date"
    t.index ["home_id"], name: "index_home_rental_requests_on_home_id"
    t.index ["start_date"], name: "index_home_rental_requests_on_start_date"
    t.index ["user_id"], name: "index_home_rental_requests_on_user_id"
  end

  create_table "homes", force: :cascade do |t|
    t.integer "host_id", null: false
    t.string "title", null: false
    t.text "description"
    t.text "rules"
    t.text "cancellations"
    t.integer "baths", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.integer "price", null: false
    t.integer "occupancy", null: false
    t.integer "beds", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url"
    t.index ["host_id"], name: "index_homes_on_host_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.date "birthday"
    t.string "location"
    t.string "email"
    t.string "phone"
    t.string "work"
    t.string "school"
    t.string "language"
    t.string "connected_account_url"
    t.boolean "plus_member"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "fname"
    t.string "lname"
  end

end
