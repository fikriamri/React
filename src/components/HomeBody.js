import React from "react";
import "./HomeBody.css";
import hamilton from "../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";

function HomeBody() {
  return (
    <div class="wrapper-home">
      <div class="container-fluid ">
        <div class="row align-items-center contain">
          <div class="col-md-5  col-12 content">
            <div class="logo">
              <img src={hamilton} class="home-image" />
            </div>
          </div>
          <div class="col-md-7 col-12">
            <div class="name1">Hi, my name is</div>
            <div class="name2">Anne Sullivan</div>
            <div class="name3">I build things for the web</div>
            <a class="name4" href="contact.html">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
