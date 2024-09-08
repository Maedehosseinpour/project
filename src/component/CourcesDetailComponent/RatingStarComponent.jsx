// import { Rating } from "flowbite-react";
// import { Flowbite } from flowbite-react";
import { useState } from 'react';
import { Rating } from '@mantine/core';
import { useParams } from 'react-router-dom';
import http from '../../core/services/interceptore'
import { refresh } from 'aos';
// component for star
export const RatingStarComponent= () => {
  // /Course/SetCourseRating?CourseId=<uuid>&RateNumber=<float></float>
  const {id} = useParams()
  // console.log('jdjjdjjjd' , id);
  const handleRate = async(value)=> {
    setValue(value)
    const respons = http. post(`/Course/SetCourseRating?CourseId=${id}&RateNumber=${value}`)
    refresh()
  }
  const [value, setValue] = useState(0);
   
      return <Rating value={value} onChange={() => handleRate(value)} />;
    
  }