import { getMenuItems, getResturantInfo, mapResturants } from "../helpers/resturant";
import { API_URL } from "../utils/api.constants";

export const fetchRestaurants = async () => {
  try {
    const response = await fetch(API_URL + "listRestaurants", {
      headers: {},
    });
    const data = await response.json();

    const resturantsData = mapResturants(data);

    return resturantsData;
  } catch (error) {
    console.log("Error fetching restaurants:", error);
    return [];
  }
};

export const fetchRestaurantMenu = async (id) => {
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