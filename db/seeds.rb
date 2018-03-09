# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Home.destroy_all

u0 = User.create({email: "Tom@Tom.com", password: "starwars", birthday: "28/09/1994", fname: "Tom", lname: "Stilwell"})
u1 = User.create({email: "TheBestGuest@ScareBnb.com", password: "hotstuff", birthday: "11/01/1991", fname: "Taylor", lname: "Made"})
u2 = User.create({email: "ThrillSeeker@spooktookular.com", password: "ghosts123", birthday: "01/02/1991", fname: "Abby", lname: "Normal"})
u3 = User.create({email: "VincentPrice@heaven.com", password: "halloweenparty", birthday: "27/05/1911", fname: "Vinny", lname: "Price"})
u4 = User.create({email: "VampireSlayer@Garlic.com", password: "iLoveStakes", birthday: "25/01/1985", fname: "Buffy", lname: "Summers"})
u5 = User.create({email: "ExorciseTHIS@LindaBlair.com", password: "helpmeplease", birthday: "13/11/1963", fname: "Regan", lname: "Kid"})
u6 = User.create({email: "MondayTuesday@ThursdayFriday.net", password: "pugsleysucks", birthday: "25/12/1986", fname: "Wednesday", lname: "Addams"})
u7 = User.create({email: "iLoveGhosts@werewolves.com", password: "teeheexoxo", birthday: "19/09/1999", fname: "Becky", lname: "Smith"})


h1 = Home.create({title: "Little Bungalow", lat: 40.751265, lng: -73.983979, price: 50, occupancy: 6, beds: 4, baths: 1, host_id: u0.id})
h2 = Home.create({title: "Small Shack", lat: 40.789980, lng: -73.941654, price: 20, occupancy: 4, beds: 3, baths: 1, host_id: u0.id})
h3 = Home.create({title: "Happy House", lat: 40.728667, lng: -73.987426, price: 47, occupancy: 4, beds: 4, baths: 1, host_id: u0.id})
h4 = Home.create({title: "Funky Townhouse", lat: 40.729943, lng: -73.981064, price: 89, occupancy: 3, beds: 2, baths: 1, host_id: u1.id})
h5 = Home.create({title: "Amity House", lat: 40.751264, lng: -73.983400, price: 20, occupancy: 8, beds: 6, baths: 1, host_id: u2.id})
h6 = Home.create({title: "Addams Family Mansion", lat: 40.741232, lng: -73.973934, price: 15, occupancy: 2, beds: 1, baths: 1, host_id: u3.id})
h7 = Home.create({title: "Room 23", lat: 40.711222, lng: -73.983979, price: 60, occupancy: 4, beds: 4, baths: 1, host_id: u4.id})
