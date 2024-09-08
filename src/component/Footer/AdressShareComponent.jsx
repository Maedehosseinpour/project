import React from 'react'
import {
    RiTelegramLine,
    RiFacebookCircleFill,
    RiInstagramLine} from "react-icons/ri"
  import { TfiTwitter } from "react-icons/tfi";
  import { IoLogoLinkedin } from "react-icons/io5";

const AdressShareComponent = () => {
  return (

        
        <div className='flex justify-start gap-4 md:gap-10 my-6 md:w-[50%] text-white'>
            <TfiTwitter size={30}/>
            <RiFacebookCircleFill size={30}/>
            <RiInstagramLine  size={30}/>
            <IoLogoLinkedin size={30}/>
            <RiTelegramLine size={30} />
                    
        </div>
              
    

  )
}

export default AdressShareComponent
