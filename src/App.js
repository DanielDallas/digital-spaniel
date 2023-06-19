import React from "react";
import HeaderHero from "./components/HeaderHero";
import WhatWeAreCapableOf from "./components/WhatWeAreCapableOf";
import RecentProjects from "./components/RecentProjects";
import CaseStudies from "./components/CaseStudies";
import WeAllAbout from "./components/WeAllAbout";
import Testimonies from "./components/Testimonies";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <HeaderHero />
      <WhatWeAreCapableOf />
      <RecentProjects />
      <CaseStudies />
      <WeAllAbout />
      <Testimonies />
      <Footer />
      {/* Add more sections/components here */}
    </div>
  );
};

export default App;
