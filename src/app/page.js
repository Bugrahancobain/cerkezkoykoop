import React from "react";
import Slider from "./components/slider";
import UnderSlider from "./components/underSlider";
import HomeAboutUs from "./components/homeAboutUs";
import HomeOurServices from "./components/homeOurServices";
import HomeContact from "./components/homeContact";
import HomeBlog from "./components/homeBlog";

export default function Home() {
  return (
    <div>
      <Slider />
      <UnderSlider />
      <HomeAboutUs />
      <HomeOurServices />
      <HomeContact />
      <HomeBlog />
    </div>
  );
}
