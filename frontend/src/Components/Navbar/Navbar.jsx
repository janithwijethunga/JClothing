import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart.png";

function Navbar() {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="flex justify-around p-4 shadow-md bg-white">
      {/* navlogo */}
      <Link to="/" onClick={() => setMenu("shop")}>
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <p className="text-black text-2xl font-semibold font-poppins">JCLOTHING</p>
        </div>
      </Link>

      {/* navmenu */}
      <ul className="flex flex-row justify-center items-center list-none gap-12 text-black text-xl font-medium cursor-pointer">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr className="w-full mt-2 h-1 bg-red-500" />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Mens</Link>
          {menu === "mens" && <hr className="w-full mt-2 h-1 bg-red-500" />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens">Womens</Link>
          {menu === "womens" && <hr className="w-full mt-2 h-1 bg-red-500" />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>
          {menu === "kids" && <hr className="w-full mt-2 h-1 bg-red-500" />}
        </li>
      </ul>

      {/* navlogincart */}
      <div className="flex items-center">
        <Link to="/login">
          <button className="mr-8 w-36 h-12 border-2 rounded-full text-black text-xl font-semibold bg-white hover:bg-jclothinggreenblue active:bg-emerald-600">
            Login
          </button>
        </Link>
        <Link to="/cart" className="relative">
          <img src={cart} alt="cart" className="w-10 h-10" />
          <div className="absolute top-0 right-0 font-poppins w-5 h-5 flex justify-center items-center rounded-full text-base bg-red-500">
            0
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
