import { Link, useParams } from "react-router-dom";
import { useResturantMenu } from "../utils/useResturantMenu";
import { ResturantInfo } from "./ResturantInfo";
import { ResturantMenuSection } from "./ResturantMenuSection";
import { useState } from "react";

export const ResturantMenu = () => {
  const { id } = useParams();
  const { resturantInfo, resturantMenuSections } = useResturantMenu(id);
  const [currentExpandedMenuSection, setCurrentExpandedMenuSection] =
    useState(null);
  return (
    <div className="resturant-menu">
      <div>
        <Link to="/resturants">⬅️ Back to resturants</Link>
      </div>
      <ResturantInfo resturantInfo={resturantInfo} />
      <div className="menu-sections">
        {resturantMenuSections?.map((section) => (
          <ResturantMenuSection
            data={section}
            key={section.title}
            currentExpanded={currentExpandedMenuSection}
            setCurrentExpanded={setCurrentExpandedMenuSection}
          />
        ))}
      </div>
    </div>
  );
};
