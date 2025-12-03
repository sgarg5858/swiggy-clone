import { IMAGE_CDN_URL } from "../utils/image.constants";

export const ResturantMenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="item-details">
        <h4>{item?.name}</h4>
        <h5>Price: ₹{item?.price / 100}</h5>
        <p>{item?.description}</p>
      </div>
      <div className="item-image">
        <img
          width={200}
          height={200}
          src={IMAGE_CDN_URL + item?.imageId}
          alt="Restaurant"
        />
        <button>Add to cart</button>
      </div>
    </div>
  );
};
