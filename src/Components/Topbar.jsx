import React, { useEffect, useState } from "react";




const Topbar = ({searchfood}) => {
  
  return (
    <>
      <div className=" flex p-4 justify-between items-center h-28 bg-slate-600">
        <img src="/Foody Zone.svg" alt="Logo" />
        <input
          className=" px-2 bg-transparent text-white border border-solid border-white outline-none rounded-md h-10"
          type="text"
          name=""
          id=""
          placeholder="Hungry For.."
          onChange={searchfood}
        />
      </div>

      <div className="filterbtn flex gap-2 justify-center mt-3 relative bg-center w-full">
        <button className=" bg-red-500 text-white font-semibold  px-1 rounded ">All </button>
        <button className=" bg-red-500 text-white font-semibold px-1 rounded ">Breakfast </button>
        <button className=" bg-red-500 text-white font-semibold px-1 rounded ">Lunch </button>
        <button className=" bg-red-500 text-white font-semibold px-1 rounded ">Dinner </button>
      </div>
    </>
  );
};

export default Topbar;
