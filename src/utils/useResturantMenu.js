import { useEffect, useState } from "react";
import { fetchRestaurantMenu } from "../data/resturants";

export const useResturantMenu = (id) => {
  const [resturantMenuSections, setResturantMenuSections] = useState(null);
  const [resturantInfo, setResturantInfo] = useState(null);

  useEffect(() => {
    const loadRestaurantMenu = async () => {
      const { menuSections, resturantInfo } = await fetchRestaurantMenu(id);
      setResturantMenuSections(menuSections);
      setResturantInfo(resturantInfo);
    };
    loadRestaurantMenu();
  }, []);

  return { resturantMenuSections, resturantInfo };
};

