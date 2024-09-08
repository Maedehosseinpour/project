

import { SwipperComponent } from "../../component/LandingComponent/swipper/SwipperComponent";
import TitrComponent from "../TitrComponent/TitrComponent";
import AllButton from "../button/AllButton";

export const Card = () => {

  return (
    <div className="dark:bg-violet-950">
      <TitrComponent title='دوره های آموزشی' />
      <SwipperComponent />
      {/* <AllButton title='نمایش همه' /> */}
    </div>
  );
};
