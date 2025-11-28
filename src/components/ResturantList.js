import { resturantList } from "../mocks/resturant-list";
import RestaurantCard from "./ResturantCard";

const RestaurantList = () => {
  return (
    <div className="restaurant-list">
      {resturantList.map((restaurant) => (
        <RestaurantCard data={restaurant} key={restaurant.info.id} />
      ))}
    </div>
  );
};

export default RestaurantList;
