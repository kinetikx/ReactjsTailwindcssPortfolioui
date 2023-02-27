const Recentposts = () => {
  return (
    <div className="bg-RecentPostBg mt-[71px]  ">
      <div className="flex-col max-w-4xl mx-auto pt-4">
        <div className="flex items-center justify-between  mx-auto mb-4  
        sm:justify-center
        ">
          <h3 className="font-normal text-[22px]
          
          ">Recent post</h3>

          <span className="font-normal text-[16px] text-[#00A8CC] 
          sm:hidden
          ">
            View all
          </span>
        </div>

        <div className="flex gap-x-6 pb-[34px]
        sm:flex-col sm:mx-[10px] sm:gap-y-[17px]
        ">
          <div className="bg-white  basis-1/2">
            <div className="pl-[23px] pt-[24px] pr-[41px] pb-[22px] flex-col
            sm:pl-[19px] sm:pt-[12px] sm:pr-[9px]
              
            ">
              <h3 className="font-bold text-[26px] leading-[38px] mb-[17px]
              sm:text-[22px] sm:mb-[12px] sm:leading-[30px]
              ">
                Making a design system from scratch
              </h3>
              <p className="text-[18px] font-normal  mb-[11px]
              sm:text-[16px] sm:mb-[19px]
              ">
                12 Feb 2020 &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;
                Design, Pattern
              </p>
              <p className="text-[16px] leading-[24px] font-normal
              sm:mr-[21px]
              
              ">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>


          <div className="bg-white  basis-1/2">
            <div className="pl-[23px] pt-[24px] pr-[41px] pb-[22px] flex-col
            sm:pl-[19px] sm:pt-[12px] sm:pr-[9px]
            ">
              <h3 className="font-bold text-[26px] leading-[38px] mb-[17px]
              sm:text-[22px] sm:mb-[12px] sm:leading-[30px]
              ">
                Creating pixel perfect icons in Figma
              </h3>
              <p className="text-[18px] font-normal  mb-[11px]
              sm:text-[16px] sm:mb-[19px]
              ">
                12 Feb 2020 &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;
                Figma, Icon Design
              </p>
              <p className="text-[16px] leading-[24px] font-normal
              sm:mr-[21px]
              ">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recentposts;
