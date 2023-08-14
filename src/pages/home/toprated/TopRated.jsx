import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/swtichTabs/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/caraousal/Carousel";

const TopRated = () => {
    const [endPoint, setendPoint] = useState("movie");
    const {data,loading} = useFetch(`/${endPoint}/top_rated`);
    console.log(endPoint);
  const onTabChange = (tab, index) => {
    setendPoint(tab === "Movies" ? "movie" : "tv");
    
  };
  return (
    <div className="caraousalSection">
      <ContentWrapper>
        <span className="caraousalTitle">Top Rated</span>
        <SwitchTab data={["Movies", "TV Shows"]} onTabChange={onTabChange}></SwitchTab>
      </ContentWrapper>
      <Carousel data={data?.results} endPoint={endPoint}/>
    </div>
  );
};

export default TopRated;
