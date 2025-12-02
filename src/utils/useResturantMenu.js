import { useEffect, useState } from "react";
import { fetchRestaurantMenu } from "../data/resturants";

export const useResturantMenu = (id) => {
  const [resturantMenu, setResturantMenu] = useState(null);
  const [resturantInfo, setResturantInfo] = useState(null);

  useEffect(() => {
    const loadRestaurantMenu = async () => {
      const { menuItems, resturantInfo } = await fetchRestaurantMenu(id);
      setResturantMenu(menuItems);
      setResturantInfo(resturantInfo);
    };
    loadRestaurantMenu();
  }, []);

  return { resturantMenu, resturantInfo };
};

