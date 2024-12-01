import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Element_Transfer from "./Element_Transfer";
import { Route, Routes } from "react-router";
import Navbar from "./Navbar";
import Nested_List from "./Nested_List";
import Infinite_Scroll from "./Infinite_Scroll";
import Hit_Game from "./Hit_Game";
import Box_Split from "./Box_Split";

function App() {
  

  return (
    <div>
      <div className="sticky top-0 z-10">
      <Navbar />
      </div>
    <Routes>
      <Route path="/element_transfer" element={<Element_Transfer />} />
      <Route path="/nested_list" element={<Nested_List />} />
      <Route path="/infinite_scroll" element={<Infinite_Scroll />} />
      <Route path="/hit-game" element={<Hit_Game />} />
      <Route path="/box-split" element={<Box_Split />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}

function PageNotFound() {
  return <h1>Page not found</h1>;
}

function Home(){
  return (
    <div className="flex text-center justify-center items-center h-screen ">
      <h1 className="text-center font-bold text-3xl">Welcome to Value Added Session Tasks 💐💐</h1>
    </div>
  )
}

export default App;
