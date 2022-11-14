import React from "react";
import opensea from "../../../assets/image/opensea.png";
import metamask from "../../../assets/image/metamask.png";
import mbToken from "../../../assets/image/mbtoken.png";

const Brand = () => {
  return (
    <section className="brand">
      <div className="container mx-auto">
        <img src={mbToken} alt="mbToken" className="w-[190px] h-auto" />
        <img src={metamask} alt="Metamask" className="w-[190px] h-auto" />
        <img src={opensea} alt="Opensea" className="w-[190px] h-auto" />
      </div>
    </section>
  );
};

export default Brand;
