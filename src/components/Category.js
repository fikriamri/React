import React from "react";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <ul className="menu">
              <li>
                <Link to="/source/bbc-news">BBC News</Link>
              </li>
              <li>
                <Link to="/source/cbc-news">CBC News</Link>
              </li>
              <li>
                <Link to="/source/cnbc">cnbc</Link>
              </li>
              <li>
                <Link to="/source/daily-mail">Daily Mail</Link>
              </li>
              <li>
                <Link to="/source/buzzfeed">Buzzfeed</Link>
              </li>
              <li>
                <Link to="/source/espn">espn</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <Category /> */}
    </div>
  );
}

export default Category;
