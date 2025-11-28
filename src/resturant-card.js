export const RestaurantCard = (props) => {
  const {
    data: {
      info: {
        name,
        costForTwo,
        cuisines,
        avgRating,
        sla: { deliveryTime },
        cloudinaryImageId,
      },
    },
  } = props;
  const imageUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    cloudinaryImageId;
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" width={230} src={imageUrl} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating ⭐ {avgRating}</h4>
      <h5>{deliveryTime} minutes</h5>
      <h6>{costForTwo}</h6>
    </div>
  );
};