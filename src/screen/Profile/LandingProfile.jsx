import { useEffect } from "react";
import { Dashboard } from "../../component/ProfileComponent/Dashboard/Dashboard";
import { clearStorage, getItem } from "../../localStorage/localStorage";
import { useNavigate } from "react-router-dom";


const LandingProfile = () => {
 

    return (
      <div className="w-full h-full dark:bg-violet-950  dark:text-violet-200">
        <Dashboard />
        
      </div>
      );
}
 
export default LandingProfile;