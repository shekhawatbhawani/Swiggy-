
import Navbar from "./Components/Navbar";
import "./style.css";
import react, { useEffect, useState } from "react";
import obj from "./Constant/Swiggy_Complete_Data";
import Banner from "./Components/Banner";

const App = () => {
  let [card0Data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
   let cardData0 = obj.data.cards[0].card.card.gridElements.infoWithStyle.info
    setData(cardData0)
        hh
  };
  return (
    <div>
      <Navbar />
      <div className="all_banner">
      {
        card0Data.map((resData, index)=>{
          <Banner key={index} resData={resData}/>
        })
      }
      </div>
    </div>
  );
};

export default App;
