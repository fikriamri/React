import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div class="col-md-7 col-12 ">
      <form class="contact-us">
        Contact Us <br /> <br />
        <div class="form-group">
          <label for="FormControlInput1">
            Full Name<span>*</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="FormControlInput1"
            placeholder="Your Full Name"
            autofocus
          />
        </div>
        <div class="form-group">
          <label for="FormControlInput2">
            Email Address<span>*</span>
          </label>
          <input
            type="email"
            class="form-control"
            id="FormControlInput2"
            placeholder="example@domain.com"
          />
        </div>
        <div class="form-group">
          <label for="FormControlInput3">
            Phone Number<span>*</span>
          </label>
          <input
            type="tel"
            class="form-control"
            id="FormControlInput3"
            placeholder="08543890****"
          />
        </div>
        <div class="form-group">
          <label for="FormControlSelect1">Nationality</label>
          <select class="form-control" id="FormControlSelect1">
            <option>Selected</option>
            <option>Indonesian</option>
            <option>Malaysian</option>
            <option>American</option>
          </select>
        </div>
        <div class="form-group">
          <label for="FormControlTextarea1">Message</label>
          <textarea class="form-control" id="FormControlTextarea1" rows="3" />
        </div>
        <div>
          <button class="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
