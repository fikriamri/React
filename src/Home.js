import React from 'react';
import './Main.css';
import logo_Alta from './img/logo-ALTA.png';
import hamilton from './img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';

function Home() {
  return (
    <div className="home">
      <header>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-12 ">
                    <div className="logo">
                            <a href="home.html"><img src={logo_Alta} alt="" id="logo" /></a>
                    </div>
                </div>
                <div className="col-md-9">
                    <ul className="menu">
                        <li><a href="home.html" id="home">home</a></li>
                        <li><a href="about.html">about</a></li>
                        <li><a href="">experience</a></li>
                        <li><a href="contact.html">contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <div class="wrapper-home">
        <div class="container-fluid ">
            <div class="row align-items-center contain">
                <div class="col-md-5  col-12 content">
                    <div class="logo">
                        <img src={hamilton}  class="home-image"/>
                    </div>
                </div>
                <div class="col-md-7 col-12">
                    <div class="name1">
                        Hi, my name is
                    </div>
                    <div class="name2">
                        Anne Sullivan
                    </div>
                    <div class="name3">
                        I build things for the web
                    </div>
                    <a class="name4" href="contact.html" >
                        Get in Touch
                    </a>
                    </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Home;
