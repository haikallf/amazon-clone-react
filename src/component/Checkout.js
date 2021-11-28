import React from "react";
import { useStateValue } from "../context/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/NTAPromo/2019/July/LP_PD_Promo2_en_US.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* <CheckoutProduct /> */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
        <h2>The subtotal</h2>
      </div>
    </div>
  );
}

export default Checkout;
