import React from "react";

import "./Home.scss";
import NavBar from "./../../Components/Utilities/NavBar";

const HomePage = () => {
  return (
    <main className="homePage">
      <NavBar />
      <section className="mainWindow"></section>
      <section className="newsWindow"></section>
    </main>
  );
};

export default HomePage;
