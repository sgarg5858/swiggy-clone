import { useState, useEffect } from "react";
import RestaurantList from "./ResturantList";
import Shimmer from "./Shimmer";

const MainComponent = () => {
  const [resturants, setResturants] = useState([]);
  const [filteredRestaurants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showTopRatedResturantsOnly, setShowTopRatedResturantsOnly] =
    useState(false);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    if(resturants.length === 0){
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

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.594566&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        { headers: {} }
      );
      const data = await response.json();

      const resturantsData = mapResturants(data);

      setResturants(resturantsData);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  return resturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setShowTopRatedResturantsOnly((prevState) => !prevState);
          }}
        >
          {showTopRatedResturantsOnly
            ? "Show All Resturants"
            : "Show Top Rated Resturants Only"}
        </button>

        <div className="search-bar">
          <input
            type="search"
            placeholder="Search Resturants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <h1 className="resturants-heading">
        {showTopRatedResturantsOnly ? "Top Rated" : "All Resturants"}
      </h1>
      <RestaurantList
        resturants={filteredRestaurants}
      />
    </div>
  );
};

export default MainComponent;

const mapResturants = (data) => {
  const cards = data?.data?.cards;
  const resturantsData = cards.find((card) => {
    return card.card.card.id === "restaurant_grid_listing_v2";
  })?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  return resturantsData || [];
};
