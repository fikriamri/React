import React from "react";
import "./Main.css";
import ContactImage from "./components/ContactImage";
import ContactForm from "./components/ContactForm";

function Contact() {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <ContactImage />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
