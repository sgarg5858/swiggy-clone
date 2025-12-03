import RestaurantCard, { withPromotedLabel } from "./ResturantCard";

const RestaurantList = (props) => {
  const { resturants } = props;

  const PromotedResturantCard = withPromotedLabel(RestaurantCard);

  return (
    <div className="restaurant-list">
      {resturants.map((restaurant) =>
        !restaurant.info.promoted ? (
          <PromotedResturantCard data={restaurant} key={restaurant.info.id} />
        ) : (
          <RestaurantCard data={restaurant} key={restaurant.info.id} />
        )
      )}
    </div>
  );
};

export default RestaurantList;
