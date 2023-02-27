import React from "react";
import FeaturedWork from "./featuredWork";
const FeaturedWorks = () => {
  return (
    <div className="max-w-4xl mx-auto ">
      <h2 className="text-HeroPrimary text-[22px] font-normal my-6 
      sm:text-[18px] sm:text-center
      ">Featured Works</h2>
      <FeaturedWork/>
      
    </div>
  );
};

export default FeaturedWorks;
