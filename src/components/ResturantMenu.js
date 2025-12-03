import { Link, useParams } from "react-router-dom";
import { useResturantMenu } from "../utils/useResturantMenu";
import { ResturantInfo } from "./ResturantInfo";
import { ResturantMenuSection } from "./ResturantMenuSection";

export const ResturantMenu = () => {
  const { id } = useParams();
  const { resturantInfo, resturantMenuSections } = useResturantMenu(id);
console.log(resturantMenuSections)
  return (
    <div className="resturant-menu">
      <div>
        <Link to="/resturants">⬅️ Back to resturants</Link>
      </div>
      <ResturantInfo resturantInfo={resturantInfo} />
      <div className="menu-sections">
        {resturantMenuSections?.map((section) => 
          <ResturantMenuSection data={section} key={section.title} />
        )}
      </div>
     
    </div>
  );
};
