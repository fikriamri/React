import React from "react";
import "./BlogSidebar.css";

function BlogSidebar() {
  return (
    <div>
      <div class="card" style={{ width: "100%" }}>
        <div className="wrapper-side-bar ">
          <span className="side-bar-header">BERITA TERKINI</span>
          <span>
            <a href="#">lihat semua</a>
          </span>
        </div>
        <div class="card" style={{ width: "100%" }}>
          <div className="wrapper-side-bar ">
            <span className="side-bar-content">
              <div className="square text-center">
                <span className="number ">#1</span>
              </div>
              <br />
              <a href="#">Gabung Alpha Tech Academy Sekarang!</a>
            </span>
          </div>
        </div>
        <div class="card" style={{ width: "100%" }}>
          <div className="wrapper-side-bar ">
            <span className="side-bar-content">
              <div className="square text-center">
                <span className="number ">#2</span>
              </div>
              <br />
              <a href="#">Ada apa antara Fariz dan Ano?</a>
            </span>
          </div>
        </div>
        <div class="card" style={{ width: "100%" }}>
          <div className="wrapper-side-bar ">
            <span className="side-bar-content">
              <div className="square text-center">
                <span className="number ">#3</span>
              </div>
              <br />
              <a href="#">Mengenal Aulia sang Master Python</a>
            </span>
          </div>
        </div>
        <div class="card" style={{ width: "100%" }}>
          <div className="wrapper-side-bar ">
            <span className="side-bar-content">
              <div className="square text-center">
                <span className="number ">#4</span>
              </div>
              <br />
              <a href="#">Belajar ReactJs itu seru. Kamu setuju?</a>
            </span>
          </div>
        </div>
        <div class="card" style={{ width: "100%" }}>
          <div className="wrapper-side-bar ">
            <span className="side-bar-content">
              <div className="square text-center">
                <span className="number ">#5</span>
              </div>
              <br />
              <a href="#">Sudahkah kamu sehat mental?</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSidebar;
