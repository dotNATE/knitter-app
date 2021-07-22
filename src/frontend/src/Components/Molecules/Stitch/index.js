import React from "react";

import "./Stitch.scss";
import Header4 from "../../Atoms/Headers/Header4";

const Stitch = ({ fName, lName, content }) => {
  return (
    <li className="stitch">
      <Header4 content={`${fName} ${lName}`} />
      <p className="stitchContent">{content}</p>
    </li>
  );
};

export default Stitch;
