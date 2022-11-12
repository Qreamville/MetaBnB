import React from "react";
import discover from "../../../assets/image/discover.png";

const Discover = () => {
  return (
    <section className="bg-purple">
      <div className="discover">
        <div className="flex-1">
          <h2 className="text-[48px] discover-heading">Metabnb NFTs</h2>
          <p className="discover-text">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className="discover-btn">Learn more</button>
        </div>
        <div className="flex-1">
          <img
            src={discover}
            alt="discover"
            loading="lazy"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Discover;
