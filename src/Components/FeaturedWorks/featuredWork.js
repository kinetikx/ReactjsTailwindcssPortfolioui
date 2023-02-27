import React from "react";
import DesignDash from "../../Assets/DesignigDashboards.svg";
import VibrantPortians from "../../Assets/VibrantPortians.svg";
import Days36 from "../../Assets/36days.svg";
const FeaturedWork = () => {
  return (
    <div>
      <div className="flex  mb-5
      sm:flex-col 
      ">
        <img className="sm:mx-[18px]" src={DesignDash} />
        <div className="flex-col ml-[18px]
        sm:mr-[18px]
        ">
          <h2 className="text-HeroPrimary font-bold text-[30px] mb-5
          sm:text-[24px] sm:mt-[17px] sm:mb-4
          ">
            Designing Dashboards
          </h2>
          <div className="flex  mb-[22px]">
            <span className="bg-FeaturedSeconder rounded-2xl text-white  text-[18px] font-black px-[10px]">
              2020
            </span>
            <a className="text-FeaturedTertiary font-normal text-[20px] ml-[26px]">
              Dashboard
            </a>
          </div>
          <p className="text-HeroPrimary text-[16px] font-normal leading-6 ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <hr className="text-[#E0E0E0] border-spacing-4 border-solid border-t-[1px]
      sm:mx-[18px]"/>

      <div className="flex  mt-5 mb-5
      sm:flex-col">
        <img className="sm:mx-[18px]" src={VibrantPortians} />
        <div className="flex-col ml-[18px]
        sm:mr-[18px]
        ">
          <h2 className="text-HeroPrimary font-bold text-[30px] mb-5
          sm:text-[24px] sm:mt-[17px] sm:mb-4
          ">
            Vibrant Portraits of 2020
          </h2>
          <div className="flex  mb-[22px]">
            <span className="bg-FeaturedSeconder rounded-2xl text-white  text-[18px] font-black px-[10px]">
              2015
            </span>
            <a className="text-FeaturedTertiary font-normal text-[20px] ml-[26px]">
            Illustration
            </a>
          </div>
          <p className="text-HeroPrimary text-[16px] font-normal leading-6 ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <hr className="text-[#E0E0E0] border-spacing-4 border-solid border-t-[1px]
      sm:mx-[18px]"/>

      <div className="flex  mt-5 mb-5
      sm:flex-col">
        <img className="sm:mx-[18px]" src={DesignDash} />
        <div className="flex-col ml-[18px]
        sm:mr-[18px]
        ">
          <h2 className="text-HeroPrimary font-bold text-[30px] mb-5
          sm:text-[24px] sm:mt-[17px] sm:mb-4
          ">
          36 Days of Malayalam type
          </h2>
          <div className="flex  mb-[22px]">
            <span className="bg-FeaturedSeconder rounded-2xl text-white  text-[18px] font-black px-[10px]
            sm:text-[16px] sm:px-[12px]
            ">
              2018
            </span>
            <a className="text-FeaturedTertiary font-normal text-[20px] ml-[26px]">
            Typography
            </a>
          </div>
          <p className="text-HeroPrimary text-[16px] font-normal leading-6 ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <hr className="text-[#E0E0E0] border-spacing-4 border-solid border-t-[1px]
      sm:mx-[18px]"/>

    </div>
  );
};

export default FeaturedWork;
