import React from 'react'
import border from '../../../assets/image/Vector 34.png'
import Group from "../../../assets/image/Group 89.png"
import game from "../../../assets/image/Group.png"
import data from "../../../assets/image/data.png"
import vector from "../../../assets/image/tahlil.png"
import TitrComponent from '../../../common/TitrComponent/TitrComponent'
import Minicategorycart from './Minicategorycart'
const CategoryCard = () => {
  const category = [
      {
      "id": "1",
      "title":"امنیت شبکه " ,
      "img": Group ,
      
  },
  {
    "id": "2",
      "title":"بازی   " ,
      "img": game ,
      },
  {
    "id": "3",
      "title":"وب دیزاین " ,
      "img":  vector,
  },
  {
    "id": "4",
    "title":"تحلیل داده " ,
    "img":  data,
}
]
  return (
    <>
    <div className='relative dark:bg-violet-950 my-64 w-full'>
      
      {/* <div className="flex flex-col items-center mb-3 text-lg text-start">
              <span className="block w-36 text-2xl text-indigo-900"> دسته بندی  </span>
              <span className="block bg-gradient-to-l from-violet-900 to-transparent py-[2px] w-36"></span>
      </div> */}
        <TitrComponent title="  دسته بندی ها  "/>

     
      <div  className='flex flex-row flex-wrap md:flex-nowrap justify-center items-center gap-5 md:gap-16 mt-8 p-5 w-[100%]' >
          {category.map((category , index) => {
                  return (
                    
                      <Minicategorycart data-aos="fade-up" data-aos-duration={`(category.id) % 2 === 0 ? 100 : 5000`}  id={category.id} title={category.title} image={category.img} />              
                  )
              })} 
      </div>
       <div className='top-0 left-0 absolute w-full h-full'>
        <img src={border} alt=""  className='w-full h-full object'/>
       </div>
      
    </div>  
    </>
  )
}

export default CategoryCard
