import React from "react"
import Slider from "react-slick"

import next from "../../assets/slider/next.png"
import prev from "../../assets/slider/back.png"

import galleryItems from "./homeGallery.json"
import "../../assets/slider/slick.css"
import "../../assets/slider/slick-theme.css"
import "./home.css"
import xarths from "../../assets/χαρτης.jpg"
import { Link } from "react-router-dom"

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
    <>
      <div className="Home">
        <h1>
          <strong className="home-title">ΚΑΛΩΣ ΗΡΘΑΤΕ ΣΤΗΝ ΚΡΗΤΗ</strong>
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
        </div>    </div>
      <div className="home-map">
        <map name="map_example">
          <Link to={"/map?selectedCity=CHQ"}>
            <area alt="djsm" target="_blank" shape="poly" coords="20,50, 20,250, 210,260, 170,80"></area>
          </Link>
          <Link to={"/map?selectedCity=RETH"}>
            <area alt="djsm" target="_blank" shape="poly" coords="210,190, 210,270, 290,300, 350,180"></area>
          </Link>
          <Link to={"/map?selectedCity=HER"}>
            <area alt="djsm" target="_blank" shape="poly" coords="300,360, 370,180, 490,200, 470,250, 480,320"></area>
          </Link>
          <Link to={"/map?selectedCity=AGN"}>
            <area alt="djsm" target="_blank" shape="poly" coords="480,190, 550,210, 550,260, 680,200, 670,330, 500,340"></area>
          </Link>
        </map>
        <img src={xarths} alt="xarths" width="700" height="400"
          useMap="#map_example">
        </img>
      </div>
    </>
  )
}

export default App
