import React from "react";
import "./Header.css";
import logo_Alta from "../img/logo-ALTA.png";
import SearchField from "react-search-field";

function Header() {
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
                  <SearchField
                    placeholder="Search..."
                    // onChange={onChange}
                    // searchText="This is initial search text"
                    classNames="test-class"
                  />
                </li>
                <li>
                  <a href="home.html">home</a>
                </li>
                <li>
                  <a href="about.html" id="about">
                    about
                  </a>
                </li>
                <li>
                  <a href="contact.html">contact</a>
                </li>
                <li>
                  <a href="" id="blog">
                    blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
