import { useEffect, useState } from "react";
import RestaurantCard from "./ResturantCard";

const RestaurantList = (props) => {
  const { topRatedOnly } = props;
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const resturantList = props.resturants;

  useEffect(() => {
    const filtered = resturantList.filter((resturant) => {
      return topRatedOnly ? resturant.info.avgRating >= 4.5 : true;
    });
    setFilteredRestaurants(filtered);
  }, [topRatedOnly, resturantList]);

  return (
    <div className="restaurant-list">
      {filteredRestaurants.map((restaurant) => (
        <RestaurantCard data={restaurant} key={restaurant.info.id} />
      ))}
    </div>
  );
};

export default RestaurantList;
