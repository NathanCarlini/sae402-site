import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="flex flex-row w-full bg-green-950 p-3 items-center justify-between  text-white">
      <div className="gap-7 flex flex-row items-center w-max">
        <img src={logo} className="aspect-square h-9 " />
        {/* <p className="font-xl font-bold">SAE 402</p> */}
      </div>
      <div className="flex flex-row items-center justify-between gap-9 pr-20">
        <p>
          <a href="#" className="hover:underline">Concept </a>
        </p>
        <p>
          <a href="#" className="hover:underline">Réalisation </a>
        </p>
        <p>
          <a href="#" className="hover:underline">Conclusion </a>
        </p>
      </div>
    </div>
  );
}
