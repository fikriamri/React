import React from "react";
import "./Main.css";
import logo_Alta from "./img/logo-ALTA.png";
import hamilton from "./img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import dot from "./img/img-dot.png";
import logo_Alta_v2 from "./img/logo-ALTA-v2.png";
import fb from "./img/ic_fb.png";
import twitter from "./img/ic-twitter.png";
import instagram from "./img/ic-instagram.png";
import linkedin from "./img/ic-linkedin.png";

function About() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div>
                <a href="home.html">
                  <img src={logo_Alta} alt="" id="logo" />
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <ul className="menu">
                <li>
                  <a href="home.html">home</a>
                </li>
                <li>
                  <a href="about.html" id="about">
                    about
                  </a>
                </li>
                <li>
                  <a href="">experience</a>
                </li>
                <li>
                  <a href="contact.html">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="wrapper-about">
        <section className="about-me">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h1>about me.</h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <p>
                  Hello! I’m Anne Sullivan, a full-stack engineer based in
                  Malang, IDN who enjoys building things that live on the
                  internet. I develop exceptional websites and web apps that
                  provide intuitive, pixel-perfect user interfaces with
                  efficient and modern backends. <br />
                  <br /> Shortly after graduating from Alterra Academy, I joined
                  the engineering team at Alterra where I work on a wide variety
                  of interesting and meaningful projects on a daily basis.{" "}
                  <br />
                  <br /> Here’s few technologies I’ve been working with recently
                  :
                </p>
                <table>
                  <tr>
                    <td>HTML & CSS</td>
                    <td className="td2">Serverless</td>
                    <td className="td3">Scrum</td>
                  </tr>
                  <tr>
                    <td>Programming</td>
                    <td className="td2">Restful API</td>
                    <td className="td3">Test-Driven Dev</td>
                  </tr>
                  <tr>
                    <td>Database</td>
                    <td className="td2">Javascript</td>
                    <td className="td3">Software Testing</td>
                  </tr>
                  <tr>
                    <td>Git & Github</td>
                    <td className="td2">Single Page App</td>
                    <td className="td3">UX/UI Designer</td>
                  </tr>
                </table>
              </div>
              <div className="col-md-5 align-items-center">
                <div className="image-about">
                  <img src={hamilton} alt="" className="about-me-img" />
                  <img src={dot} alt="" className="dot" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12 aligness">
              <img src={logo_Alta_v2} width="110 px" />
            </div>
            <div className="col-md-4 col-12 ">
              <div className="SocialMedia">Social Media</div>
              <div className="sosmed">
                <div className="facebook aligness">
                  <img src={fb} />
                </div>
                <div className="Twitter aligness">
                  <img src={twitter} />
                </div>
                <div className="Instagram aligness">
                  <img src={instagram} />
                </div>
                <div className="LinkedIn aligness">
                  <img src={linkedin} />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <h5>copyright &copy; 2019 Alterra</h5>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
