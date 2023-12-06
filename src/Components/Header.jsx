import React from "react";

const Header = () => {
  return (
    <header className="py-4 w-full absolute top-0">
      <div className="container flex justify-between items-center">
        <a href="" className="font-goodGame uppercase text-5xl">
          Harold
        </a>

        <a
          href=""
          className="w-[181px] h-[54px] font-goodGame px-8 py-4 bg-white rounded shadow justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-black text-base font-normal leading-snug tracking-tight uppercase">
            BUY Harold
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
