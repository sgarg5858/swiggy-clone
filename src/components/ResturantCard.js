import { IMAGE_CDN_URL } from "../utils/image.constants";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
  const {
    data: {
      info: {
        name,
        costForTwo,
        cuisines,
        avgRating,
        sla: { deliveryTime },
        cloudinaryImageId,
        id,
        promoted,
      },
    },
  } = props;
  const imageUrl = IMAGE_CDN_URL + cloudinaryImageId;
  return (
    <Link to={"/resturant/menu/" + id} className="restaurant-card">
      <img className="restaurant-image" width={230} src={imageUrl} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating ⭐ {avgRating}</h4>
      <h5>{deliveryTime} minutes</h5>
      <h6>{costForTwo}</h6>
      <button></button>
    </Link>
  );
};

export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <p className="promoted-label">Promoted</p>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
