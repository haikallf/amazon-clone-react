import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_2x._CB429090087_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123456"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61sF+mRl+IL._AC_UL160_SR160,160_.jpg"
            rating={5}
          />
          <Product
            id="123457"
            title="Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, Dark Gray, 6-Ft"
            price={12.99}
            image="https://m.media-amazon.com/images/I/61Xgh3kNA3L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="923456"
            title="Microsoft 365 Personal - Box Pack - 1 Person - 12 Month"
            price={39.99}
            image="https://m.media-amazon.com/images/I/61iYgugWAVL._AC_SL1144_.jpg"
            rating={5}
          />
          <Product
            id="103456"
            title="Amazon Basics Legal Pads, Pink, Orchid & Blue Color Paper, 6-Pack"
            price={15.86}
            image="https://m.media-amazon.com/images/I/71AXs1I-HdL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="120856"
            title="Logitech G Pro Wireless Gaming Mouse with Esports Grade Performance"
            price={94.99}
            image="https://m.media-amazon.com/images/I/51ySu55JzAL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="123056"
            title="Samsung 34 Class Ultrawide Monitor with 21:9 Wide Screen, S34J552WQNXZA"
            price={339.94}
            image="https://m.media-amazon.com/images/I/81AJCvJ-REL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
