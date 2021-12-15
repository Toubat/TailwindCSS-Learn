/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import house from "./images/house.png";

function App() {
  return (
    <div className="">
      <nav className="bg-white shadow-lg">
        <div className="px-4 max-w-6xl mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-7 ">
              <a href="#" className="flex item-center py-4 px-2">
                <img src={house} alt="" className="w-8 h-8 mr-2" />
                <span className="font-semibold text-gray-500 text-lg">Prime Properties</span>
              </a>
            </div>
            <div>
              <a href="">Home</a>
              <a href="">Service</a>
              <a href="">About</a>
              <a href="">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
