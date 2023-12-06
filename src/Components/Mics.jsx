import React from "react";
import micsPattern from "../assets/logo.png";

const Mics = () => {
  return (
    <section className="py-24 w-full relative">
      <img
        src={micsPattern}
        alt=""
        className="absolute pointer-events-none bottom-0 hidden lg:block right-0 w-96 rounded-full h-96 object-top object-cover opacity-5"
      />
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-[#81c9e6] text-7xl font-goodGame text-center leading-[80px] tracking-wider">
          TOKENOMICS
        </h1>
        <div className=" mt-16 gap-[67px] grid grid-cols-1 lg:grid-cols-2 justify-between">
          <div className="flex-col justify-start items-center gap-5 inline-flex">
            <div className="pl-[39.37px] pr-[38.63px] pt-[38.10px] pb-[37.90px] bg-[#81c9e6] rounded-full shadow-inner justify-center items-center inline-flex">
              <div className="text-black text-[40.64px] font-goodGame leading-[50.80px] tracking-wide">
                🚀
              </div>
            </div>
            <div className="flex-col justify-start items-center flex">
              <div className="text-black text-[32px] font-goodGame leading-10 tracking-wide">
                Liquidity Locked
              </div>
              <div className="w-[326px] text-center text-black text-base font-normal leading-loose tracking-tight">
                HAROLD's LP tokens are locked in a multi-sig wallet and
                partially burned, ensuring a constant LP supply. Our contract is
                also locked with EverOwn for enhanced security.
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-5 inline-flex">
            <div className="pl-[39.37px] pr-[38.63px] pt-[38.10px] pb-[37.90px] bg-[#81c9e6] rounded-full shadow-inner justify-center items-center inline-flex">
              <div className="text-black text-[40.64px] font-goodGame leading-[50.80px] tracking-wide">
                2%
              </div>
            </div>
            <div className="flex-col justify-start items-center flex">
              <div className="text-black text-[32px] font-goodGame leading-10 tracking-wide">
                Tax
              </div>
              <div className="w-[326px] text-center text-black text-base font-normal leading-loose tracking-tight">
                To facilitate ongoing marketing initiatives and utility
                development, a designated portion of each transaction is
                allocated to the HAROLD treasury wallet. This strategic
                allocation ensures a continuous flow of resources to support the
                project's growth and expansion.
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Mics;
