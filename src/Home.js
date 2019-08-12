import React from "react";
import "./Main.css";
import Header from "./components/Header";
import HomeBody from "./components/HomeBody";

function Home() {
  return (
    <div className="home">
      <Header />
      <HomeBody />
    </div>
  );
}

export default Home;
