import React from "react";
import "./BlogSidebar.css";
import { actions } from "../Store";
import { connect } from "unistore/react";

function BlogSidebar(props) {
  return (
    <div>
      <div className="card" style={{ width: "100%" }}>
        <div className="wrapper-side-bar ">
          <span className="side-bar-header">BERITA TERKINI</span>
          <span>
            <a href="#">lihat semua</a>
          </span>
        </div>
      </div>
      {/* dislice agar hanya memunculkan data 1-5 */}
      {props.data.map((item, key) => {
        // console.log("from store", props.listNews);
        return (
          <div className="card" style={{ width: "100%" }}>
            <div className="wrapper-side-bar ">
              <span className="side-bar-content">
                <div className="square text-center">
                  <span className="number ">#{key + 1}</span>
                </div>
                <br />
                <a href={item.url}>
                  <div className="side-bar-title">{item.title}</div>
                </a>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// export default BlogSidebar;
export default connect(
  "login, nama, email, isLogin",
  actions
)(BlogSidebar);
