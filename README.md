# ScareBnb
[![forthebadge](https://forthebadge.com/images/badges/made-with-ruby.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

[![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/issues/)



<img src="https://github.com/Tom-Stilwell/ScareBnb/blob/master/app/assets/images/ghost.png" alt="spooky" align="center" width="100px" height="100px"/>

[Live Site](https://scarebnb123.herokuapp.com/#/)


## Overview

ScareBnb is a web app designed for helping consumers find short-term rentals of
homes of a spooky nature. Modeled after a certain other home-sharing app (...cough),
ScareBnb allows users to search for homes via location and filter based on price,
occupancy, and proposed dates of stay. Users can then request a reservation, view their upcoming and past trips,
and leave reviews of homes they've visited.


## Technologies

ScareBnb implements a Rails backend with a JavaScript frontend. ActiveRecord and
Postgresql are employed for data storage and querying. HTML and CSS are responsible
for all styling and animations (emphasis on CSS keyframes for movement). Finally, React with Redux
is used for systematic uniformity of back/frontend interactions and rendering.

Note: jQuery is used in one instance (price filter) for demonstration of skill. ScareBnb emphasizes
interaction with the virtual DOM in all other cases.

## Selected Features

### Main Splash Images

![Splash](https://media.giphy.com/media/KZfnmWjvUqadnOtjWO/giphy.gif)

The splash image screen was designed using CSS keyframe animation. The images stack on top of one
another and are animated to translate NorthEast and become opaque for 75% of the animation time.
This animation is delayed for each image to give the appearance of cycling.
Additionally, the main text's animation is done through simple keyframe animation.
Currently, the animations are styled for standard and webkit-based browsers.

``` CSS
/* app/assets/stylesheets/splash.scss */

@keyframes cycle {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 1;
    transform: translate3d(50px, -100px, 0px);
  }
  25% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#main-splash img.splash-img {
  animation-name: cycle;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-duration: 50s;
  animation-direction: normal;
  -webkit-animation-name: cycle;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-duration: 60s;
  -webkit-animation-direction: normal;
}

#main-splash img.first {
  z-index: 3;
  animation-delay: 0s;
  -webkit-animation-delay: 0s;
}
#main-splash img.second {
  z-index: 2;
  animation-delay: 12.5s;
  -webkit-animation-delay: 12.6s;
}
#main-splash img.third {
  z-index: 1;
  animation-delay: 25s;
  -webkit-animation-delay: 25.2s;
}

#main-splash img.bottom {
  z-index: -5;
}

```


### Home Search Filtering

Home search filtering is accomplished on the backend in the initial querying to prevent
unwanted data being returned to the frontend and inefficient sorting with JavaScript.
All filters are stored in the react state and applied through ActiveRecord querying.

Filtering by proposed date ranges required the implementation of a "temporary" rental
concept. Rails instantiates a rental for the desired dates and filters out any homes with
conflicting approved rental requests. This allows for DRY use of the same code implemented
in rental creation.

``` ruby
## home.rb

def self.filter(filters)
  splitSouth = filters[:bounds]["southWest"][1...-1].split(", ")
  splitNorth = filters[:bounds]["northEast"][1...-1].split(", ")

  minLat = splitSouth.first
  minLng = splitSouth.last
  maxLat = splitNorth.first
  maxLng = splitNorth.last

  homes = Home.where(lat: minLat..maxLat, lng: minLng..maxLng)
  .where('homes.occupancy >= ?', filters[:minGuests])
  .where(price: filters[:price][:minPrice]..filters[:price][:maxPrice])
  .limit(200)

  start_date = filters[:dates][:startDate]
  end_date = filters[:dates][:endDate]

  if !start_date.empty? && !end_date.empty?
    homes = homes.select do |home|
      rental = HomeRentalRequest.new(start_date: start_date, end_date: end_date, home_id: home.id)
      result = rental.dates_filter_checker;
      result
    end
  end

  homes
end
```


## The Future

ScareBnb has the foundations for:
* experience booking (haunted hayrides, perilous parties, creepy clubbing, etc.)
* host profiles and ability to approve/deny rental requests
* wishlist creation via favoriting
* user/listing reporting
* filtering via amenities, rating, etc.
* user and review search

All of these (and more) to come!
