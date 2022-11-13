import React from "react";
import Nfts from "./components/Nfts";
import { nftData } from "../../utils/link";
import { VscSettings } from "react-icons/vsc";

const NFT = () => {
  const types = [
    "Restaurant",
    "Cottage",
    "Castle",
    "Fantast city",
    "Beach",
    "Cabins",
    "Off-grid",
    "Farm",
  ];

  return (
    <main className="container mx-auto mt-[128px]">
      <section className="overflow-auto">
        <div className="flex flex-row gap-x-[48px] items-center">
          {types.map((items) => (
            <p
              key={items}
              className="text-xl font-normal text-[#434343] whitespace-pre"
            >
              {items}
            </p>
          ))}
          <div className="border-[#B4B4B4] border rounded-lg h-[48px] w-[158px] flex items-center justify-center gap-x-4 px-2">
            <span className="text-base text-[#333] font-normal">Location</span>
            <VscSettings size={24} className="-rotate-90" />
          </div>
        </div>
      </section>
      <section className="my-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
          {nftData.map((item) => (
            <Nfts item={item} key={item.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default NFT;
