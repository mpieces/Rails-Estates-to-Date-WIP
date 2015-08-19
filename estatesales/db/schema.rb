# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150818193456) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "estatesales", force: :cascade do |t|
    t.string   "title"
    t.string   "address"
    t.string   "city"
    t.string   "state"
    t.integer  "zip_code"
    t.string   "start_date"
    t.string   "end_date"
    t.string   "times"
    t.string   "description"
    t.string   "forms_of_payment"
    t.string   "special_inst"
    t.string   "img_url"
    t.integer  "lister_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "estatesales", ["lister_id"], name: "index_estatesales_on_lister_id", using: :btree

  create_table "favorites", force: :cascade do |t|
    t.string   "notes"
    t.integer  "shopper_id"
    t.integer  "estatesale_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "favorites", ["estatesale_id"], name: "index_favorites_on_estatesale_id", using: :btree
  add_index "favorites", ["shopper_id"], name: "index_favorites_on_shopper_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "type"
    t.string   "username"
    t.string   "password_hash"
    t.string   "email"
    t.string   "company_name"
    t.string   "owner_name"
    t.string   "company_url"
    t.string   "phone_number"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

end