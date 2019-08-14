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
                <Link to="/source/axios">axios</Link>
              </li>
              <li>
                <Link to="/source/buzzfeed">Buzzfeed</Link>
              </li>
              <li>
                <Link to="/source/cbc-news">CBC News</Link>
              </li>
              <li>
                <Link to="/source/daily-mail">Daily Mail</Link>
              </li>
              <li>
                <Link to="/source/entertainment-weekly">
                  entertainment weekly
                </Link>
              </li>
              <li>
                <Link to="/source/fortune">fortune</Link>
              </li>
              <li>
                <Link to="/source/google-news">Google News</Link>
              </li>
              <li>
                <Link to="/source/hacker-news">hacker News</Link>
              </li>
              <li>
                <Link to="/source/ign">ign</Link>
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
