import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-[6rem] bg-primary-950 flex items-center p-4 justify-between">
      <h1 className="font-zen-dots text-white text-xl">aube</h1>
      <nav className="font-poppins text-secondary-100">
        <ul className="flex items-center gap-4">
          <li>
            <Link to={"/"}>
              <p>home</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <p>about us</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <p>services</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <p>our works</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
