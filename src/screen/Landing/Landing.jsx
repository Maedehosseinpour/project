import React, { useEffect } from 'react'
import LandingComponent from '../../component/LandingComponent/LandingMainPageComponent/LandingComponent'

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0,0)
}, []);
  return (
    <div>
      <LandingComponent/>
    </div>
  )
}

export default Landing
