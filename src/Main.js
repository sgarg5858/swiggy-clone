import { resObj } from "../data";
import { RestaurantCard } from "./resturant-card";

export const MainComponent = () => {
  return (
    <div className="main">
      <div className="search">
        <input type="text" placeholder="Search for restaurants or cuisines" />
        <button>Search</button>
      </div>
      <div className="restaurant-list">
        {resObj.map((restaurant) => (
          <RestaurantCard data={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};
