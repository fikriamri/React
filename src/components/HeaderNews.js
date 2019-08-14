import React from "react";
import "./HeaderNews.css";
import logo_Alta from "../img/news.png";
import { Link } from "react-router-dom";
import { actions } from "../Store";
import { connect } from "unistore/react";
// import Category from "./Category";
// import SearchField from "react-search-field";

function HeaderNews(props) {
  const clickSignOut = () => {
    console.log("props", props);
    props.setNama("");
    props.setEmail("");
    props.setLogin(false);
  };
  return (
    <div>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12 ">
              <div className="logo">
                <a href="home.html">
                  <img src={logo_Alta} alt="" id="logo" width="60px" />
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <ul className="menu">
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/profile">profile</Link>
                </li>
                <li>
                  <Link to="/signin">sign in</Link>
                </li>
                <li>
                  <Link to="/signin" onClick={clickSignOut}>
                    sign out
                    {console.log(props.isLogin)}
                  </Link>
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

// export default Header;
export default connect(
  "isLogin",
  actions
)(HeaderNews);
