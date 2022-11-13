import React from "react";
import { BiX, BiChevronRight } from "react-icons/bi";
import metamask from "../assets/image/image 66.png";
import walletConnect from "../assets/image/image 69(1).png";

const Modal = ({ setToggleModal }) => {
  return (
    <div className="modal fixed">
      <div className="bg-white h-[280px] w-[320px] sm:w-[500px]  rounded-lg">
        <div className="flex items-center justify-between pb-[20px] border-b p-6">
          <h4 className="text-2xl text-[#333] font-bold">Connect Wallet</h4>
          <BiX
            size={24}
            className="cursor-pointer"
            onClick={() => setToggleModal(false)}
          />
        </div>
        <div className="px-6 py-3 space-y-3">
          <p className="text-base text-[#333]font-normal">
            Choose your preferred wallet:
          </p>
          <div
            className="flex items-center justify-between wallet"
            onClick={() => setToggleModal(false)}
          >
            <div className="flex items-center gap-x-2">
              <img src={metamask} alt="" />
              <h5>Metamask</h5>
            </div>
            <BiChevronRight size={24} />
          </div>
          <div
            className="flex items-center justify-between wallet"
            onClick={() => setToggleModal(false)}
          >
            <div className="flex items-center gap-x-2">
              <img src={walletConnect} alt="" />
              <h5>WalletConnect</h5>
            </div>
            <BiChevronRight size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
