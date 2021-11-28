import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./component/Checkout";
import Login from "./component/Login";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./context/StateProvider";
import Payment from "./component/Payment";
import Orders from "./component/Orders";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import ProductList from "./component/ProductList";

const promise = loadStripe(
  "pk_test_51JQfngLEK5wzqYonYXTXAjgkJmsCgFsCxtDoMSp3GWClu07MGIhWhTgtAmD25dheOP8AwNN0EOOoafhvPOAl762000IZu72MjF"
);

function App() {
  const [{}, dispatch] = useStateValue();
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const getProductRequest = async (searchValue) => {
    // const response = await fetch(
    //   `https://walmart.p.rapidapi.com/products/list?cat_id=0&pref_store=2648%2C5434%2C2031%2C2280%2C5426&sort=best_seller&page=1&zipcode=94066&query=${searchValue}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "x-rapidapi-host": "walmart.p.rapidapi.com",
    //       "x-rapidapi-key":
    //         "31ce2e01b8msh5353adf7900d970p12ec1ajsnde215eb5772b",
    //     },
    //   }
    // );

    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=a4a74fbf`;
    const response = await fetch(url);

    const responseJSON = await response.json();
    if (responseJSON.Search) {
      setProducts(responseJSON.Search);
    }
  };

  useEffect(() => {
    getProductRequest(searchValue);
    console.log(products);
  }, [searchValue]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // kalo ada yang login, udah lama login
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/searchpage">
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="productlist__container">
              <ProductList products={products} />
            </div>
          </Route>
          <Route path="/orders">
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
