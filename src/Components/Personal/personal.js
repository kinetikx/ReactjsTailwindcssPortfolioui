import React from "react";
import Personalimage from "../../Assets/personalimage.svg"
 
const Personal = () => {
  return (
    <div className="flex mt-[40px]    mx-auto sm:text-center sm:items-center justify-between max-w-4xl
    sm:flex-col-reverse 
    ">


      <div className="flex-col ">
        <h2 className="font-bold text-[44px]  text-HeroPrimary 
        sm:text-[32px] sm:mx-[32px] ">
          Hi, I am John,<br/> Creative Technologist
        </h2>
        <p className="font-normal text-[16px]  mt-[40px] text-HeroPrimary
         sm:mx-[24px]
        ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br/>
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam <br/> consequat sunt nostrud amet.
        </p>
        <button className="bg-HeroButton font-medium text-[20px] leading-[23,5px] rounded-sm text-white mt-[38px] pl-[20px] pb-[14px] pr-[21px] pt-[6px] ">Download Resume</button>
      </div>
      <div className=" ">
        <img className="" src={Personalimage}/>
      </div>


    </div>
  );
};

export default Personal;
