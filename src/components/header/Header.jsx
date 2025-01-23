import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div id="header" className="flex gap-5 p-5 bg-slate-300">
      <h2>Header Component</h2>
      <NavLink to={"/"}>Главная</NavLink>
      <NavLink to={"/about"}>О нас</NavLink>


    </div>
  );
};

export default Header;

