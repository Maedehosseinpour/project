import profileimage from "../../assets/image/profile.png"
import NoImagePerson from "../../assets/image/profile/person.png"
import { CustomGetUseQueryExtra } from "../customHook/CustomGetUseQueryExtra"
const ProfileImage = () => {
  const {data} = CustomGetUseQueryExtra('getProfileInfoImage',`/SharePanel/GetProfileInfo`)

  
  const img= data?.currentPictureAddress

  const noImage = img==="Not-set" || img=== undefined
 
//   img === null || img === "undefined" || img === "" || img===[];


    return ( 
    <div className="w-full h-1/3 mt-10 mb-4 border-b-1 border-gray-400 pb-6 ">
        <img src={noImage ? NoImagePerson : data?.currentPictureAddress} className="mx-auto outline outline-2 
        outline-offset-[6px] outline-white rounded-full w-[10rem] h-[10rem]"></img>
    </div>
     );
}
 
export default ProfileImage;