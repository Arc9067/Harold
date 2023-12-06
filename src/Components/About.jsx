import React from "react";
import aboutPattern from "../assets/logo.png";

const About = () => {
  return (
    <section className="py-24 w-full relative">
      <img
        src={aboutPattern}
        alt=""
        className="absolute pointer-events-none top-0 hidden lg:block left-0 w-96 rounded-full h-96 object-top object-cover opacity-5"
      />
      <div className="container flex flex-col justify-center items-center gap-12">
        <h1 className="text-[#81c9e6] text-7xl font-goodGame text-center leading-[80px] tracking-wider">
          ABOUT Harold
        </h1>
        <p className="max-w-[811px] text-center text-black text-lg font-normal leading-[48px]">
          HAROLD's story began as a simple meme, a pixelated depiction of a man
          with a perpetually perplexed expression. This relatable character
          resonated with internet denizens, becoming a symbol of shared
          experiences and universal emotions. Inspired by HAROLD's viral
          popularity, a group of crypto enthusiasts decided to immortalize the
          meme on the Ethereum blockchain, creating the HAROLD token.
        </p>
        <p className="max-w-[811px] text-center text-black text-lg font-normal leading-[48px]">
          HAROLD's tokenomics are designed to foster a sense of community and
          shared ownership. A portion of each transaction is redistributed to
          all HAROLD holders, rewarding those who believe in the meme's
          potential. The token also serves as a gateway to exclusive
          HAROLD-themed merchandise, events, and experiences, further
          strengthening the bond between the meme and its loyal followers.
        </p>

        <a
          href=""
          className="h-[54px] px-8 py-4 bg-[#81c9e6] rounded shadow justify-center items-center gap-2.5 flex"
        >
          <div className="text-zinc-900 text-2xl font-goodGame leading-snug tracking-tight">
            JOIN TELEGRAM
          </div>
        </a>
      </div>
    </section>
  );
};

export default About;
