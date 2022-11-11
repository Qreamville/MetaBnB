import React from "react";
import Brand from "../assets/image/brand2.png";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { aboutUsLinks, communityLinks, placesLinks } from "../utils/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto">
        <div className="footer-heading text-white">
          <div className="w-40 mb-4">
            <img src={Brand} alt="Metabnb" />
          </div>
          <div className="footer-heading__socials">
            <ImFacebook />
            <BsInstagram />
            <BsTwitter />
          </div>
          <div>
            <p>&copy; 2022 Metabnb</p>
          </div>
        </div>
        <ul className="footer-community text-white">
          <h4>Community</h4>
          {communityLinks.map((link) => (
            <li key={link.id}>{link.name}</li>
          ))}
        </ul>
        <ul className="footer-places text-white">
          <h4>Places</h4>
          {placesLinks.map((link) => (
            <li key={link.id}>{link.name}</li>
          ))}
        </ul>
        <ul className="footer-aboutUs text-white">
          <h4>About us</h4>
          {aboutUsLinks.map((link) => (
            <li key={link.id}>{link.name}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
