import React from "react";

import "./Home.scss";
import NavBar from "./../../Components/Utilities/NavBar";
import Header1 from "../../Components/Atoms/Headers/Header1";
import CreateNewStitchForm from "../../Components/Organisms/Forms/CreateNewStitchForm";
import Stitch from "../../Components/Molecules/Stitch";

const HomePage = () => {
  return (
    <main className="homePage">
      <NavBar />
      <section className="mainWindow">
        <Header1 content="Home" />
        <CreateNewStitchForm />
        <div>
          <Stitch
            fName="Nate"
            lName="Dogg"
            content="This stitches like crazy!"
          />
        </div>
      </section>
      <section className="newsWindow"></section>
    </main>
  );
};

export default HomePage;
