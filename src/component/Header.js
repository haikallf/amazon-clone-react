import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase";
import { useState } from "react";

function Header({ searchValue, setSearchValue }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const [localValue, setLocalValue] = useState("");
  const history = useHistory();
  const location = useLocation();

  const handleSearchChange = (event) => {
    setLocalValue(event.target.value);
  };

  const doSearchEnter = (event) => {
    if (event.key === "Enter") {
      setSearchValue(localValue);
      if (location.pathname != "/searchpage") {
        history.push("/searchpage");
      }
    }
  };

  const doSearch = () => {
    setSearchValue(localValue);
    if (location.pathname != "/searchpage") {
      history.push("/searchpage");
    }
  };

  const goToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSearchValue("");
    setLocalValue("");
    history.replace("/");
  };

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        onClick={goToHome}
      />

      <div className="header__search">
        <input
          className="header__searchInput"
          type="search"
          value={localValue}
          onChange={handleSearchChange}
          onKeyDown={doSearchEnter}
          placeholder="Search movies"
        />
        <SearchIcon className="header__searchIcon" onClick={doSearch} />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello {user ? `${user.email}` : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
