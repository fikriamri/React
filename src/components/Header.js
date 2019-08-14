import React from "react";
import "./Header.css";
import logo_Alta from "../img/logo-ALTA.png";
import { Link } from "react-router-dom";
// import Category from "./Category";
// import SearchField from "react-search-field";

function Header(props) {
  return (
    <div>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12 ">
              <div className="logo">
                <a href="home.html">
                  <img src={logo_Alta} alt="" id="logo" />
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <ul className="menu">
                <li>
                  <span>
                    <input
                      type="text"
                      // class="form-control"
                      id="FormControlInput1"
                      placeholder="Search..."
                      autofocus
                      onChange={props.handleSearch}
                    />
                    {/* {console.log(this.state.search)} */}
                  </span>
                </li>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/">contact</Link>
                </li>
                <li>
                  <Link to="/blog">blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <Category /> */}
      </header>
    </div>
  );
}

export default Header;
