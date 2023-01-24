import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="">Home</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
