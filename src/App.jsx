import React, { useEffect, useState } from "react";
import Topbar from "./Components/Topbar";
import Food from "./Components/Food";

export const link = "http://localhost:9000";


const App = () => {
  const [data, setdata] = useState();
  const [filtereddata, setfiltereddata] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(link);
      const resdata = await res.json();
      setdata(resdata);
      setfiltereddata(resdata);
    };
    fetchdata();
  }, []);
  const searchfood = (e) => {
    const foodvalue = e.target.value;
    console.log(foodvalue);

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(foodvalue.toLowerCase())
    );
    setfiltereddata(filter);
  };

  return (
    <>
      <Topbar searchfood={searchfood} />
      <Food  data = {data} filtereddata={filtereddata} link={link}/>
    </>
  );
};

export default App;
