import { Outlet } from "react-router-dom";
import { Nav } from "../component/header/Nav";
import { Footer } from "../component/Footer/Footer";

const LayOut = () => {
    return ( 
        <>
           <Nav />
            <Outlet/>
            <Footer/>
        </>
     );
}
 
export default LayOut;