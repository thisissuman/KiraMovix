import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/swtichTabs/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/caraousal/Carousel";

const Trending = () => {
    const [endPoint, setendPoint] = useState("day");
    const {data,loading} = useFetch(`/trending/all/${endPoint}`);
    console.log(endPoint);
  const onTabChange = (tab, index) => {
    setendPoint(tab === "Day" ? "day" : "week");
    
  };
  return (
    <div className="caraousalSection">
      <ContentWrapper>
        <span className="caraousalTitle">Trending</span>
        <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange}></SwitchTab>
      </ContentWrapper>
      <Carousel data={data?.results}/>
    </div>
  );
};

export default Trending;
