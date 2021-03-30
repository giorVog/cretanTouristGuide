import React from "react"
import "./styles.css"
import cultureMarker from "../../../assets/markers/culture.png"
import restaurantMarker from "../../../assets/markers/restaurant.png"
import barMarker from "../../../assets/markers/bar.png"
import coffeeMarker from "../../../assets/markers/coffee.png"
import beachMarker from "../../../assets/markers/beach.png"
import hotelMarker from "../../../assets/markers/hotel.png"
import airportMarker from "../../../assets/markers/airport.png"

import ShowMoreText from "react-show-more-text"

const MARKER_ICONS = {
  CULTURE: cultureMarker,
  RESTAURANT: restaurantMarker,
  BAR: barMarker,
  COFFEE: coffeeMarker,
  BEACH: beachMarker,
  HOTEL: hotelMarker,
  AIRPORT: airportMarker
}

const Balloon = ({ marker }) => (
  <div className="marker__balloon">
    <div className="marker_ballonName">
      <strong>{marker.name}</strong>
    </div>
    <ShowMoreText lines={2} more="Show More" less="Show Less" expanded={false}>
      {marker.desc}
    </ShowMoreText>

    <div className="marker_link_wrapper">
      Για περισσοτερες πληροφοριες
      <a href={marker.link} target="_blank" rel="noopener noreferrer">
        πατήστε εδω
      </a>
    </div>
  </div>
)

const Marker = ({ marker, showBalloon }) => {
  return (
    <div className="marker">
      <img src={MARKER_ICONS[marker.type]} alt={marker.name} />
      {showBalloon && <Balloon marker={marker} />}
    </div>
  )
}

export default Marker
