import React, { useState } from "react";
import "./App.css"
import { Link } from "react-router";

function Navbar() {

    const [selectedItem, setSelectedItem] = useState(0)

    const urls = [
        { name: "Home", url: "/" },
        { name: "Element Transfer", url: "/element_transfer" },
        { name: "Nested List", url: "/nested_list" },
        { name: "Infinite Scroll", url: "/infinite_scroll" },
        { name: "Hit Game", url: "/hit-game" },
        { name: "Box Split", url: "/box-split" },
    ]

     const handleSelectItem = (index) => {
        setSelectedItem(index)
    }
    
    console.log(selectedItem);
  return (
    <div className="flex justify-center items-center space-x-3">

    <div className="flex flex-row justify-center items-center gap-5 bg-slate-400 p-5 space-x-3 sticky w-[800px] rounded-full mt-5">
        {
            urls.map((url, index) => (
                <li key={index} onClick={() => handleSelectItem(index)} className={selectedItem === index ? "text-white" : "text-black"}>
                    <Link to={url.url}>{url.name}</Link>
                </li>
            ))
        }
    </div>
    </div>
  );
}

export default Navbar;
