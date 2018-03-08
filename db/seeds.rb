# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u0 = User.create({email: "Tom@Tom.com", password: "starwars", birthday: "28/09/1994", fname: "Tom", lname: "Stilwell"})
u1 = User.create({email: "TheBestGuest@ScareBnb.com", password: "hotstuff", birthday: "11/01/1991", fname: "Taylor", lname: "Made"})
u2 = User.create({email: "ThrillSeeker@spooktookular.com", password: "ghosts123", birthday: "01/02/1991", fname: "Abby", lname: "Normal"})
u3 = User.create({email: "VincentPrice@heaven.com", password: "halloweenparty", birthday: "27/05/1911", fname: "Vinny", lname: "Price"})
u4 = User.create({email: "VampireSlayer@Garlic.com", password: "iLoveStakes", birthday: "25/01/1985", fname: "Buffy", lname: "Summers"})
u5 = User.create({email: "ExorciseTHIS@LindaBlair.com", password: "helpmeplease", birthday: "13/11/1963", fname: "Regan", lname: "Kid"})
u6 = User.create({email: "MondayTuesday@ThursdayFriday.net", password: "pugsleysucks", birthday: "25/12/1986", fname: "Wednesday", lname: "Addams"})
u7 = User.create({email: "iLoveGhosts@werewolves.com", password: "teeheexoxo", birthday: "19/09/1999", fname: "Becky", lname: "Smith"})
