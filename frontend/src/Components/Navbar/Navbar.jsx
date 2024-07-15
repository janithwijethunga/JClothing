import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart.png";

function Navbar() {

    const[menu,setMenu] = useState("shop");


  return (
    //navbar
    <div className="flex justify-around p-4 shadow">
      {/* navlogo */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" className="w-12 h-12" />
        <p className="text-black text-2xl font-semibold font-poppins">
          JCLOTHING
        </p>
      </div>
      {/* navmenu */}
      <ul className="flex flex-row justify-center items-center list-none gap-12 text-black text-xl font-medium cursor-pointer rounded-full">
        <li onClick={()=>{setMenu("shop")}}>Shop {menu==="shop"?<hr className="font-poppins w-full rounded-2xl mt-2 h-1 bg-red-500" />:<></>}</li>
        <li onClick={()=>{setMenu("men")}}>Men {menu==="men"?<hr className="font-poppins w-full rounded-2xl mt-2 h-1 bg-red-500" />:<></>}</li>
        <li onClick={()=>{setMenu("women")}}>Women {menu==="women"?<hr className="font-poppins w-full rounded-2xl mt-2 h-1 bg-red-500" />:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}>Kids {menu==="kids"?<hr className="font-poppins w-full rounded-2xl mt-2 h-1 bg-red-500" />:<></>}</li>
      </ul>
      {/* navlogincart */}
      <div className="flex items-center">
        <button className="mr-8 hover:bg-jclothinggreenblue active:bg-emerald-600 w-36 h-12 border-2 rounded-full text-black text-xl curser-pointer font-semibold font-poppins bg-white ">
          Login
        </button>
        <img src={cart} alt="cart" className="w-10 h-10" />
        <div className="font-poppins w-5 h-5 flex justify-center items-center -mt-9 -ml-3 rounded-full text-base bg-red-500">
          0
        </div>
      </div>
    </div>
  );
}

export default Navbar;
