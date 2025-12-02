import { Link, useParams } from "react-router-dom";
import { useResturantMenu } from "../utils/useResturantMenu";
import { ResturantMenuItem } from "./ResturantMenuItem";
import { ResturantInfo } from "./ResturantInfo";

export const ResturantMenu = () => {
  const { id } = useParams();
  const { resturantInfo, resturantMenu } = useResturantMenu(id);

  return (
    <div className="resturant-menu">
      <div>
        <Link to="/resturants">⬅️ Back to resturants</Link>
      </div>
      <ResturantInfo resturantInfo={resturantInfo} />
      <div className="menu-items">
        {resturantMenu?.map((item) => (
          <ResturantMenuItem key={item.card.info.id} item={item} />
        ))}
      </div>
    </div>
  );
};
