import ScrollToTop from "react-scroll-to-top";
import { Card } from "../../../common/Cource/Card";
import CategoryCard from "../Categoryfill/CategoryCard";
import News from "../News/News";
import Professors from "../Professors/Professors";
import { Service } from "../Services/Service";
import { Toplanding } from "../TopLanding/Toplanding";



const LandingComponent = () => {
    return ( 
        <div  className="z-0 dark:border-violet-950 bg-bluec dark:bg-violet-950 shadow-2xl shadow-bg-bluec dark:shadow-2xl dark:shadow-violet-600 w-full h-auto">
            
            {/* section one Top Landing*/}
            <Toplanding/>

            {/* section Two Services*/}
            <Service/>

            {/* section Three Cource Cart in landing*/}
            <Card/>
            

            {/* section four Category in landing*/}
            <CategoryCard/>

            {/* section Five Professor in landing*/}
            <Professors/>

            {/* section six News in landing*/}
            <News/>
            <ScrollToTop smooth style={{ backgroundColor: 'rgba(88,0,255,0.4)',
                right: '60px' ,
                borderRadius: '50%' ,
                textAlign: 'center',
                }}/>
        </div>
     );
}
 
export default LandingComponent;