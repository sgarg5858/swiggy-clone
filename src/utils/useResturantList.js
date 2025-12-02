import { useState, useEffect } from "react";
import { fetchRestaurants } from "../data/resturants";
import { filterResturant } from "../helpers/resturant";

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
    
    const filtered = resturants?.filter((resturant) =>
      filterResturant(showTopRatedResturantsOnly, resturant, searchText)
    );

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

