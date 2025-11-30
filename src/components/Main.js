import { useState, useEffect } from "react";
import RestaurantList from "./ResturantList";
import Shimmer from "./Shimmer";

const MainComponent = () => {
  const [showTopRatedResturantsOnly, setShowTopRatedResturantsOnly] =
    useState(false); 
  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

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

  //Conditional rendering
  if(resturants.length === 0){
    return <Shimmer />;
  }

  return (
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
      </div>
      <h1 className="resturants-heading">
        {showTopRatedResturantsOnly ? "Top Rated" : "All Resturants"}
      </h1>
      <RestaurantList
        resturants={resturants}
        topRatedOnly={showTopRatedResturantsOnly}
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
