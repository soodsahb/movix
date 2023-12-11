import React from "react";
import "./style.scss";
import HeroBanner from "./homeBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner></HeroBanner>
      <Trending />
      <Popular></Popular>
      <TopRated></TopRated>
    </div>
  );
};

export default Home;
