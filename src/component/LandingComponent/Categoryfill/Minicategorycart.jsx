import React from 'react'

const Minicategorycart = ({title,image,id}) => {
  
  const bg = (Number(id)%2===0) ? `top-0` : `top-20`;
  
  return (
        <div data-aos="fade-up" data-aos-duration={Number(id) % 2 === 0 ? `1500` : `3000`} data-aos-easing="linear" className={` dark:from-violet-900  dark:to-violet-700 relative cursor-pointer z-50 bg-gradient-to-b from-[#6B3FEA] to-[#7070FF]  hover:from-[#f4f2fb] hover:to-[#8e8ebe]  rounded-2xl rounded-bl-[5rem] w-[45%] lg:w-[18%] h-52 text-white hover:text-[#6D53F2] ${bg}`}>
            <div className='mx-auto mt-10 flex h-20 w-[40%] items-center justify-center hover:text-[#6D54F3]'>
              <img src={image} className=''  alt="" />
              {/* <svg width={20} height={20}>
                <img src={image} />
              </svg> */}
            </div>
            <div className='text-center text-xl'>{title}</div>
        </div>
  
  )
}

export default Minicategorycart