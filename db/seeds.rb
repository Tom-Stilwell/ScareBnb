# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Home.destroy_all
HomeRentalRequest.destroy_all
Review.destroy_all

u0 = User.create({email: "Tom@Tom.com", password: "starwars", birthday: "28/09/1994", fname: "Tom", lname: "Stilwell"})
u1 = User.create({email: "TheBestGuest@ScareBnb.com", password: "hotstuff", birthday: "11/01/1991", fname: "Taylor", lname: "Made"})
u2 = User.create({email: "ThrillSeeker@spooktookular.com", password: "ghosts123", birthday: "01/02/1991", fname: "Abby", lname: "Normal"})
u3 = User.create({email: "VincentPrice@heaven.com", password: "halloweenparty", birthday: "27/05/1911", fname: "Vinny", lname: "Price"})
u4 = User.create({email: "VampireSlayer@Garlic.com", password: "iLoveStakes", birthday: "25/01/1985", fname: "Buffy", lname: "Summers"})
u5 = User.create({email: "ExorciseTHIS@LindaBlair.com", password: "helpmeplease", birthday: "13/11/1963", fname: "Regan", lname: "Posezhun"})
u6 = User.create({email: "MondayTuesday@ThursdayFriday.net", password: "pugsleysucks", birthday: "25/12/1986", fname: "Wednesday", lname: "Addams"})
u7 = User.create({email: "brains@brains.com", password: "brainsbrains", birthday: "21/09/1952", fname: "Brain Craving", lname: "Scott"})
u8 = User.create({email: "FeedMe@stalker.com", password: "kidneysplease", birthday: "03/09/1947", fname: "Mashyou", lname: "Tobits"})
u9 = User.create({email: "notawerewolf@iswear.com", password: "liarliar", birthday: "12/09/1989", fname: "Matt", lname: "Paws"})
u10 = User.create({email: "whereIsShe@Imustfindher.com", password: "jenny!", birthday: "19/09/1999", fname: "Matthias", lname: "WhatHappenedToJenny"})
u11 = User.create({email: "thawing@itswarm.com", password: "stickmeinthefreezer", birthday: "29/06/1929", fname: "Moreice", lname: "Corpse"})
u12 = User.create({email: "iLoveGhosts@werewolves.com", password: "teeheexoxo", birthday: "17/07/1962", fname: "Becky", lname: "Smith"})
u13 = User.create({email: "iHopeIMakeIt@doomed.com", password: "pleaseGOD", birthday: "17/07/1982", fname: "Patrick", lname: "Won't-Last-Long"})
u14 = User.create({email: "calciumLover@mortuary.com", password: "givemebones", birthday: "13/07/1974", fname: "Mike", lname: "Bone-Collector"})
u15 = User.create({email: "hurt@hospital.net", password: "bleeding", birthday: "25/03/1989", fname: "O.", lname: "Scar"})


USERS= [u0,u1,u2,u3,u4,u5,u6,u7,u8,u9,u10,u11,u12]

DESCRIPTIONS = ["A cozy little place with all the ghosts and goblins and demons your heart could desire!", "You'll love this quaint, pre-war incubus of demonic plague. Great lighting!", "The house wrote this listing itself. I merely serve it. Good water pressure.", "So cozy and comforting. Try the wine in the cupboard. You'll want to stay forever. And ever. And ever."]

h1 = Home.create({title: "A Real Scream", lat: 40.751265, lng: -73.983979, price: 50, occupancy: 6, beds: 4, baths: 1, host_id: u0.id, image_url: "http://www.auction.com/blog/wp-content/uploads/2015/10/fear-of-home-buying.jpg", description: DESCRIPTIONS.sample})
h2 = Home.create({title: "Your Nightmare", lat: 40.789980, lng: -73.941654, price: 20, occupancy: 4, beds: 3, baths: 1, host_id: u0.id, image_url: "http://www.lovethispic.com/uploaded_images/40535-Scary-Blue-Haunted-House.jpg", description: DESCRIPTIONS.sample})
h3 = Home.create({title: "Alive House", lat: 40.728667, lng: -73.987426, price: 47, occupancy: 4, beds: 4, baths: 1, host_id: u0.id, image_url: "http://www.thefix.com/sites/default/files/styles/article/public/scaryhouse.jpg", description: DESCRIPTIONS.sample})
h4 = Home.create({title: "Nothing To See Here", lat: 40.729943, lng: -73.981064, price: 89, occupancy: 3, beds: 2, baths: 1, host_id: u1.id, image_url: "http://img1.etsystatic.com/126/0/11598164/il_570xN.1035544531_4wma.jpg", description: DESCRIPTIONS.sample})
h5 = Home.create({title: "Witch Hangout", lat: 40.751264, lng: -73.983400, price: 20, occupancy: 8, beds: 6, baths: 1, host_id: u2.id, image_url: "http://photos.smugmug.com/Portfolio/i-9wVzbS8/0/44b1346a/X2/trey-ratcliff-long-scary-room-X2.jpg", description: DESCRIPTIONS.sample})
h6 = Home.create({title: "Addams Family Mansion", lat: 40.741232, lng: -73.973934, price: 15, occupancy: 2, beds: 1, baths: 1, host_id: u3.id, image_url: "https://www.remotelands.com/remotenew1/dist/images/hotel/preferhotel/s160826001.jpg", description: DESCRIPTIONS.sample})
h7 = Home.create({title: "Room 23", lat: 40.711222, lng: -73.983979, price: 60, occupancy: 4, beds: 4, baths: 1, host_id: u4.id, image_url: "http://i0.wp.com/danniebspeaks.com/wp-content/uploads/2016/10/Mooneys-mansion.jpg?resize=375%2C250", description: DESCRIPTIONS.sample})
<<<<<<< HEAD
=======
h8 = Home.create({title: "Transylvania Getaway", lat: 46.173971, lng: 25.233201, price: 60, occupancy: 4, beds: 4, baths: 1, host_id: u4.id, image_url: "http://www.remotelands.com/remotenew1/dist/images/hotel/preferhotel/s160826001.jpg", description: DESCRIPTIONS.sample})
h9 = Home.create({title: "Zimbabwe gets creepy!", lat: -18.995532, lng: 29.146541, price: 120, occupancy: 7, beds: 5, baths: 2, host_id: u15.id, image_url: "http://www.lovethispic.com/uploaded_images/40535-Scary-Blue-Haunted-House.jpg", description: DESCRIPTIONS.sample})
h10 = Home.create({title: "San Francisco Rules!", lat: 37.765081, lng: -122.461004, price: 350, occupancy: 2, beds: 1, baths: 1, host_id: u14.id, image_url: "http://i.dailymail.co.uk/i/pix/2014/01/24/article-2545200-1AEBCA2C00000578-936_964x641.jpg", description: "If you HAVE to leave New York for your scares, this place does the job."})


>>>>>>> 61a71d623e699edb410069410649afbf99b71ba1

ARTICLES = ["The", "One", "My", "Your", "Some", "Another"]
ADJECTIVES = ["Spooky", "Thrilling", "Creepy", "Slimy", "Haunted", "Creaky", "Cavernous", "Oozing", "Shrieking", "Mysterious", "Suspicious", "Suspiciously Clean", "Deserted", "Abandoned", "Foggy", "Howling"]
NOUNS = ["Shack", "Mansion", "Warehouse", "Mill", "Factory", "Forest", "Bog", "Basement", "Hotel", "Motel", "Beach House", "Loft", "Room", "Hospital Bed"]

IMAGES = ["http://homemydesign.com/wp-content/uploads/2012/11/coolest-and-stylish-gothic-bedroom-ideas.jpg", "http://s-i.huffpost.com/gen/1108057/images/o-ABANDONED-FARMHOUSE-facebook.jpg", "http://i.dailymail.co.uk/i/pix/2014/01/24/article-2545200-1AEBCA2C00000578-936_964x641.jpg", "http://www.cajungrocer.com/blog/wp-content/uploads/2017/06/CG_Folklore.png", "http://www.remotelands.com/remotenew1/dist/images/hotel/preferhotel/s160826001.jpg", "http://i0.wp.com/danniebspeaks.com/wp-content/uploads/2016/10/Mooneys-mansion.jpg?resize=375%2C250", "http://www.thesun.co.uk/wp-content/uploads/2016/04/2810515.main_image.jpg?strip=all"  ]

def randomHomeTitle
  title = ARTICLES.sample + " " + ADJECTIVES.sample + " " + NOUNS.sample
end

def randomUserId
  User.order("RANDOM()").first.id
end

def randomHomeId
  Home.order("RANDOM()").first.id
end

def randomDate (from = Time.local(2014, 1, 1), to = Time.local(2019, 1, 1))
  Time.at(from + rand * (to.to_f - from.to_f))
end

100.times do
  Home.create({title: randomHomeTitle, lat: rand(40.704440...40.878000), lng: rand(-74.0100000...-73.914000), price: rand(30...500), occupancy: rand(1...20), beds: rand(1...8), baths: rand(1...4), host_id: randomUserId, image_url: IMAGES.sample, description: DESCRIPTIONS.sample })
end

r1 = HomeRentalRequest.create({home_id: h2.id, user_id: u1.id, start_date: "12/03/2018", end_date: "15/03/2018"})
r2 = HomeRentalRequest.create({home_id: h2.id, user_id: u2.id, start_date: "18/03/2018", end_date: "19/03/2018"})
r3 = HomeRentalRequest.create({home_id: h5.id, user_id: u3.id, start_date: "25/03/2018", end_date: "01/04/2018"})
r4 = HomeRentalRequest.create({home_id: h5.id, user_id: u4.id, start_date: "12/03/2018", end_date: "19/03/2018"})
r5 = HomeRentalRequest.create({home_id: h1.id, user_id: u5.id, start_date: "21/03/2018", end_date: "26/03/2018"})
r6 = HomeRentalRequest.create({home_id: h2.id, user_id: u6.id, start_date: "01/04/2018", end_date: "11/04/2018"})
r7 = HomeRentalRequest.create({home_id: h5.id, user_id: u7.id, start_date: "12/04/2018", end_date: "14/04/2018"})

300.times do
  start_date = randomDate
  end_date = randomDate + rand(1..9)
  HomeRentalRequest.create({home_id: randomHomeId, user_id: randomUserId, start_date: start_date, end_date: end_date})
end

REVIEWS = ["One of the best experiences we've had. We still can't find little Timmy!",
  "I've never peed so much in my life!",
  "There was an antique little girl doll in the corner that shouted obscenities in Latin the entire time. I really couldn't have asked for a better honeymoon.",
  "My husband and I thought this site was a joke. It's no joke. Guess I don't need to go for that colonic this year.",
  "Before she passed, my mother said she'd always be there in spirit. On this vacation, she literally was!",
  "Really more of a spooky experience than a scary one. Could've used more carnage and less twilight wailing.",
  "A horde of spiders took up residence in one of my galoshes and it was at the peak of the rainy season in the swamplands, so I had to go barefoot on midnight romps through the thickets. Awwww, who am i kidding? I would've gone barefoot anyway!"]

1000.times do
  Review.create({body: REVIEWS.sample, created_at: randomDate, reviewer_id: randomUserId, home_id: randomHomeId, accuracy_stars: rand(1..5), communication_stars: rand(1..5), cleanliness_stars: rand(1..5), location_stars: rand(1..5), checkin_stars: rand(1..5), value_stars: rand(1..5)})
end
