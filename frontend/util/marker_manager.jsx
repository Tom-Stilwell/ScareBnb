import React from "react";
import { HomeIndexItem } from "../components/home/home_index_item";

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.updateMarkers = this.updateMarkers.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
  }

  updateMarkers(homes) {
    const homeIds = homes.reduce((acc, home) => {
      acc.push(home.id);
      return acc;
    }, []);

    homes.forEach(home => {
      if (!this.markers[home.id]) {
        // debugger
        this.createMarkerFromBench(home);
      }
    });

    Object.keys(this.markers).forEach(key => {
      key = parseInt(key);
      if (!homeIds.includes(key) && this.markers[key]) {
        this.removeMarker(this.markers[key]);
        this.markers[key] = null;
      }
    });
  }

  createMarkerFromBench(home) {
    // debugger
    const latLng = new google.maps.LatLng(home.lat, home.lng);
    const image = {
      url: "http://www.clker.com/cliparts/k/l/2/F/R/M/white-speech-bubble.svg",
      scaledSize: new google.maps.Size(30, 30)
    };
    const icon1 = {
      path:
        "M 400,450 350,350 250,350 250,200 550,200 550,350 450,350 400,450 z",
      fillColor: "white",
      fillOpacity: 1,
      strokeColor: "black",
      strokeWeight: 2,
      scale: 0.1,
      anchor: new google.maps.Point(400, 450),
      labelOrigin: new google.maps.Point(400, 275)
    };
    const icon2 = {
      path:
        "M 400,450 350,350 250,350 250,200 550,200 550,350 450,350 400,450 z",
      fillColor: "yellow",
      fillOpacity: 1,
      strokeColor: "black",
      strokeWeight: 2,
      scale: 0.15,
      anchor: new google.maps.Point(400, 450),
      labelOrigin: new google.maps.Point(400, 275)
    };
    const marker = new google.maps.Marker({
      zIndex: home.id,
      opacity: 1,
      position: latLng,
      title: home.title,
      homeId: home.id,
      icon: icon1,
      label: {
        text: `$${home.price}`,
        color: "black",
        fontSize: "12px",
        fontWeight: "bold"
      }
    });
    marker.setMap(this.map);

    marker.addListener("mouseover", () => {
      marker.setIcon(icon2);
      marker.setZIndex(marker.zIndex * 100);
    });
    marker.addListener("mouseout", () => {
      marker.setIcon(icon1);
      marker.setZIndex(marker.zIndex / 100);
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<div class="window-div">
        <a href="/#/homes/${home.id}">
          <span>
            <img
              class="window-image"
              src=${home.image_url}
              style="width: 270px; height: 180px;"
            />
          </span>

          <div class="window-info" style="height: 60px; padding-left: 10px;">
            <span class="window-occupancy" style="display: block;">
              ${home.occupancy} people, ${home.beds} beds
            </span>
            <span class="window-title" style="display: block; font-weight: 500; font-size: 18px;">${
              home.title
            }</span>
            <span class="window-price">From $${home.price} per night</span>
          </div>
        </a>
      </div>`
    });

    // debugger;

    marker.addListener("click", () => {
      infoWindow.open(this.map, marker);
    });

    this.markers[home.id] = marker;
  }

  removeMarker(marker) {
    marker.setMap(undefined);
  }
}
