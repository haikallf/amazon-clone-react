import React from "react";
import "./ProductList.css";
import Product from "./Product";
import { useStateValue } from "../context/StateProvider";

function ProductList(props) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (id, title, image, price, rating) => {
    //dispatch
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <>
      {/* {props.products.map((product) => (
        <div className="productlist__card">
          <Product
            id={product.imdbID}
            title={product.Title}
            image={product.Poster}
            price={product.Year}
            rating={5}
          />
        </div>
      ))} */}

      {props.products.map((product) => (
        <div className="productlist">
          <div className="productlist__info">
            <p>{product.Title}</p>
            <p className="productlist__price">
              <small>$</small>
              <strong>{50}</strong>
            </p>

            <div className="productlist__rating">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <p>★</p>
                ))}
            </div>
          </div>

          <img className="productlist__image" src={product.Poster} alt="" />

          <button
            className="productlist__button"
            onClick={() =>
              addToBasket(product.imdbID, product.Title, product.Poster, 50, 5)
            }
          >
            Add to basket
          </button>
        </div>
      ))}
    </>
  );
}

export default ProductList;
