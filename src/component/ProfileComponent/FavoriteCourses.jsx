import { CustomGetUseQueryExtra } from "../customHook/CustomGetUseQueryExtra";
import { TableSelectedCourse } from "./TableSelectedCourse";

const FavoriteCourses = () => {

    const {data} = CustomGetUseQueryExtra('getFavoritCourse',`/SharePanel/GetMyFavoriteCourses`)
    

    return (
        <>
        <div className="w-[95%] mx-auto">
            <TableSelectedCourse data={data && data.favoriteCourseDto} />
        </div>
        </>
      );
}
 
export default FavoriteCourses;