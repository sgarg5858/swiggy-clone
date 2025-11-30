import RestaurantCard from "./ResturantCard";

const RestaurantList = (props) => {
  const { resturants } = props;

  return (
    <div className="restaurant-list">
      {resturants.map((restaurant) => (
        <RestaurantCard data={restaurant} key={restaurant.info.id} />
      ))}
    </div>
  );
};

export default RestaurantList;
