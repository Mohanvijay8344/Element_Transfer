import React from "react";
import "./App.css"

function Navbar() {
  return (
    <div className="flex flex-row justify-center items-center gap-5 bg-slate-400 p-5 space-x-3 sticky">
        <li className="hover:text-white">
            <a href="/" className="">Home</a>
        </li>
        <li className="hover:text-white">
            <a href="/element_transfer">Element Transfer</a>
        </li>
        <li className="hover:text-white">
            <a href="/nested_list">Nested List</a>
        </li>
        <li className="hover:text-white">
            <a href="/infinite_scroll">Infinite Scroll</a>
        </li>
        <li className="hover:text-white">
            <a href="/hit-game">Hit Game</a>
        </li>
        <li className="hover:text-white">
            <a href="/box-split">Bos Split</a>
        </li>
    </div>
  );
}

export default Navbar;
