import React, { useEffect, useState } from "react";




const Food = ({data,filtereddata,link}) => {

 

  return (
    <div className="foodsec flex justify-center items-center">
      <div className="food-cont grid grid-cols-1 gap-4 py-4 lg:grid-cols-3 py-2">
        {filtereddata?.map(({ image, text, name, type, price }) => (
          <div
            className="foodcard rounded-xl backdrop-filter backdrop-blur-xs flex justify-between items-center gap-3 border-2  h-44 w-96 border-white"
            key={name}
          >
            <div>
              <img src={link + image} alt="" />
            </div>
            <div className="foodinfo w-1/2 flex-col ">
              <div>
                <h3 className=" font-bold text-white text-2xl">{name}</h3>
                <p className=" text-white text-sm">{text}</p>
              </div>
              <div className="btn flex justify-end items-end p-2 ">
                <button className=" bg-red-500 text-white font-semibold p-1 rounded ">
                  {" "}
                  $ {price.toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;

