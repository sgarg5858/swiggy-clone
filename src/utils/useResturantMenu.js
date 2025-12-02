import { useEffect, useState } from "react";
import { API_URL } from "./api.constants";

const fetchRestaurantMenu = async (id) => {
  try {
    const listRestaurantMenuResponse = await fetch(
      API_URL + "listRestaurantMenu/" + id,
      {
        headers: {},
      }
    );
    const listRestaurantMenuData = await listRestaurantMenuResponse.json();
    const menuItems = getMenuItems(listRestaurantMenuData);
    const resturantInfo = getResturantInfo(listRestaurantMenuData);
    return { menuItems, resturantInfo };
  } catch (error) {
    console.log("Error fetching restaurant menu", error);
  }
};

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

const getMenuItems = (resturantData) => {
  const menuItems =
    resturantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;
  return menuItems;
};

const getResturantInfo = (resturantData) => {
  const resturantInfo = resturantData?.data?.cards[2]?.card?.card?.info;
  return resturantInfo;
};
