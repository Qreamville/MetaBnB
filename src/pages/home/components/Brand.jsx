import React from "react";
import opensea from "../../../assets/image/opensea.png";
import metamask from "../../../assets/image/metamask.png";
import mbToken from "../../../assets/image/mbtoken.png";

const Brand = () => {
  return (
    <section className="brand">
      <div className="container mx-auto">
        <img src={mbToken} alt="mbToken" />
        <img src={metamask} alt="Metamask" />
        <img src={opensea} alt="Opensea" />
      </div>
    </section>
  );
};

export default Brand;
