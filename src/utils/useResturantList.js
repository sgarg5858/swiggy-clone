import { useState, useEffect } from "react";
import { API_URL } from "./api.constants";

const fetchRestaurants = async () => {
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

export const useResturantList = () => {
  const [resturants, setResturants] = useState([]);
  const [filteredRestaurants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showTopRatedResturantsOnly, setShowTopRatedResturantsOnly] =
    useState(false);

  useEffect(() => {
    const loadRestaurants = async () => {
      const data = await fetchRestaurants();
      setResturants(data);
    };
    loadRestaurants();
  }, []);

  useEffect(() => {
    if (resturants.length === 0) {
      return;
    }
    const filtered = resturants?.filter((resturant) => {
      const matchesRating = showTopRatedResturantsOnly
        ? resturant.info.avgRating > 4.2
        : true;
      const matchesSearch = resturant.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return matchesRating && matchesSearch;
    });

    setFilteredResturants(filtered);
  }, [showTopRatedResturantsOnly, resturants, searchText]);

  return {
    resturants,
    filteredRestaurants,
    searchText,
    setSearchText,
    showTopRatedResturantsOnly,
    setShowTopRatedResturantsOnly,
  };
};

const mapResturants = (data) => {
  console.log(data);
  const resturantsData =
    data?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  return resturantsData || [];
};
