import React from "react";

import "./Home.scss";
import NavBar from "./../../Components/Utilities/NavBar";
import Header1 from "../../Components/Atoms/Headers/Header1";

const HomePage = () => {
  return (
    <main className="homePage">
      <NavBar />
      <section className="mainWindow">
        <Header1 content="Home" />
      </section>
      <section className="newsWindow"></section>
    </main>
  );
};

export default HomePage;
