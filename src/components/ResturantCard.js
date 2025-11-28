import { IMAGE_CDN_URL } from "../utils/image.constants";

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
  const imageUrl = IMAGE_CDN_URL + cloudinaryImageId;
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
