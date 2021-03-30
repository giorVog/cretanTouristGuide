import React from "react"
import Slider from "react-slick"

import next from "../../assets/slider/next.png"
import prev from "../../assets/slider/back.png"

import galleryItems from "./homeGallery.json"
import "../../assets/slider/slick.css"
import "../../assets/slider/slick-theme.css"
import "./home.css"

const sliderConfig = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  centerMode: true, // enable center mode
  centerPadding: "50px",
  nextArrow: <img src={next} alt="next_photo" />,
  prevArrow: <img src={prev} alt="previous_photo" />
}

function App() {
  return (
    <div className="Home">
      <h1>
        <strong className="app-title">WELCOME TO CRETE</strong>
      </h1>
      <div className="Home__sliderWrapper">
        <Slider {...sliderConfig}>
          {galleryItems.map((item) => {
            return (
              <div key={item.id} className="img-card">
                <img
                  className="img"
                  src={`${process.env.PUBLIC_URL}/images/HomeGallery/${item.image}`}
                  alt="sgewhh"
                />
                <div className="card-body">
                  <div className="card-title">{item.title}</div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default App
