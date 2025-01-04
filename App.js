import Navbar from "./Components/Navbar";
import "./style.css";
import react, { useEffect, useState } from "react";
import obj from "./Constant/Swiggy_Complete_Data";
import Banner from "./Components/Banner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card1 from "./Components/Card1";
import Filter_search from "./Components/Filter_search";

const App = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  let [card0DataTitle, setDataTitle] = useState([]);
  let [card0Data, setData] = useState([]);
  let [card1DataTitle, setDataTitle1] = useState([]);
  let [card1Data, setData1] = useState([]);
  let [card2DataTitle, setDataTitle2] = useState([]);
  let [card2Data, setData2] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = () => {
    let cardData0 = obj.data.cards[0].card.card.gridElements.infoWithStyle.info;
    setData(cardData0);
    let cardData1 =obj.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setData1(cardData1);
    let cardData2 = obj.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    setData2(cardData2)
    setDataTitle(obj.data.cards[0].card.card.header.title);
    setDataTitle1(obj.data.cards[1].card.card.header.title);
    setDataTitle2(obj.data.cards[2].card.card.title)
    console.log(obj.data.cards[6]);
  };
  function cardFilter() {
    let filterData = card1Data.filter((element) => element.info.avgRating >= 4);
    setData(filterData);
  }
  function sort(element) {
    console.log(element.target.value);
    let duplicateArr = [...card1Data];
    if (element.target.value === "sortByRating") {
      let sortData = duplicateArr.sort(
        (a, b) => a.info.avgRating - b.info.avgRating
      );
      setData(sortData);
    }
    if (element.target.value === "sortByFoodName") {
      duplicateArr.sort((a, b) => {
        if (a.info.name > b.info.name) return 1;
        return -1;
      });
      setData(duplicateArr);
    }
    if (element.target.value === "SortByDistance") {
      duplicateArr.sort((a, b) => {
        let A = a.info.sla.slaString.slice(0, 2);
        let B = b.info.sla.slaString.slice(0, 2);

        return A - B;
      });
      setData(duplicateArr);
    }
  }
  let searchData = (e) => {
    let searchData = card1Data.filter((element) =>
      element.info.name.toLowerCase().includes(e.target.value)
    );
    setData(searchData);
  }

  return (
    <div>
      <Navbar />
      <Filter_search searchData ={searchData} sort={sort} cardFilter={cardFilter}/>
      <h1>{card0DataTitle}</h1>
      <Slider {...settings}>
        {card0Data.map((res) => {
          return <Banner key={res.id} resData={res} />;
        })}
      </Slider>
      <h1>{card1DataTitle}</h1>
      <div className="all-cards">
        {/* <Slider {...settings}> */}
          {card1Data.map((res) => {
            return <Card1 key={res.info.id} resData={res} />;
          })}
        {/* </Slider> */}
      </div>
     <h1>{card2DataTitle}</h1>
     <div className="all-cards">
        {/* <Slider {...settings}> */}
          {card2Data.map((res) => {
            return <Card1 key={res.info.id} resData={res} />;
          })}
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default App;
