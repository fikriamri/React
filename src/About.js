import React from "react";
import "./Main.css";
import Header from "./components/Header";
import AboutTitle from "./components/AboutTitle";
import AboutParagraph from "./components/AboutParagraph";
import AboutTable from "./components/AboutTable";
import AboutImg from "./components/AboutImg";
import Footer from "./components/Footer";

function About() {
  return (
    <div>
      <Header />
      <div className="wrapper-about">
        <AboutTitle />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <AboutParagraph />
                <AboutTable />
              </div>
              <div className="col-md-5 align-items-center">
                <AboutImg />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
