import React from "react";
import "./Footer.css";
import logo_Alta_v2 from "../img/logo-ALTA-v2.png";
import fb from "../img/ic_fb.png";
import twitter from "../img/ic-twitter.png";
import instagram from "../img/ic-instagram.png";
import linkedin from "../img/ic-linkedin.png";

function Footer() {
  return (
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
  );
}

export default Footer;
