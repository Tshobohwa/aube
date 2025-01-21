import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-[6rem] bg-primary-950 flex items-center p-4 justify-between fixed top-0">
      <h1 className="font-zen-dots text-white text-xl">aube</h1>
      <nav className="font-poppins text-secondary-100">
        <ul className="flex items-center gap-4">
          <li>
            <Link to={"/"}>
              <p>Acceuil</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <p>a propos de nous</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <p>nos services</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <p>nos travaux</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <div className="p-2 border-2 border-white">
                <p>contactez-nous</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
