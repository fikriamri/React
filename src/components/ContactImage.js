import React from "react";
import "./ContactImage.css";
import logo_Alta_v2_2x from "../img//logo-ALTA-v2@2x.png";

function ContactImage() {
  return (
    <div class="col-md-5 col-12 d-flex align-items-center nol">
      <div class="box-biru" />
      <img src={logo_Alta_v2_2x} width="248px" alt="" id="left-image" />
    </div>
  );
}

export default ContactImage;
