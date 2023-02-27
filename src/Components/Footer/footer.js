import React from 'react';
import Facebook from "../../Assets/SocialIcons/Facebook.svg"
import Instagram from "../../Assets/SocialIcons/Instagram.svg"
import Linkdin from "../../Assets/SocialIcons/Linkdin.svg"
import Twitter from "../../Assets/SocialIcons/Twitter.svg"
const Footer = () => {
    return (
        <div className='mt-[83px] mb-[54px] ' >
            <div className='flex justify-center gap-x-[35px]'>
                <img src={Facebook}/>
                <img src={Instagram}/>

                <img src={Twitter}/>
                <img src={Linkdin}/>
            </div>
            <p className='text-[14px] text-HeroPrimary font-normal mt-[26px] text-center' >Copyright ©2020 All rights reserved </p>
        </div>
    );
};

export default Footer;