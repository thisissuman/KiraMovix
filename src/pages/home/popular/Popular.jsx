import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/swtichTabs/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/caraousal/Carousel";

const Popular = () => {
    const [endPoint, setendPoint] = useState("movie");
    const {data,loading} = useFetch(`/${endPoint}/popular`);
    console.log(endPoint);
  const onTabChange = (tab, index) => {
    setendPoint(tab === "Movies" ? "movie" : "tv");
    
  };
  return (
    <div className="caraousalSection">
      <ContentWrapper>
        <span className="caraousalTitle">What's Popular</span>
        <SwitchTab data={["Movies", "TV Shows"]} onTabChange={onTabChange}></SwitchTab>
      </ContentWrapper>
      <Carousel data={data?.results} endPoint={endPoint}/>
    </div>
  );
};

export default Popular;
