import React from "react";

const Footer = () => {
  return (
    <div className=" ra flex flex-col items-center justify-center font-bold  bg-slate-500 text-slate-200  p-4 text-center  text-xl lg:text-md break-words leading-7">
      <p>
        This project created only education purpose and learning &copy;
      </p>
      <p>
        created with ❤ by{" "}
        <a href="https://www.instagram.com/ranjith_raghul_/" className="text-red-400">
          Ranjith Raghul.S
        </a>
      </p>
    </div>
  );
};

export default Footer;
