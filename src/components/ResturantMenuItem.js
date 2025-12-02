import { IMAGE_CDN_URL } from "../utils/image.constants";

export const ResturantMenuItem = ({ item }) => {
  return (
    <div  className="menu-item">
      <div className="item-details">
        <h4>{item.card.info.name}</h4>
        <h5>Price: ₹{item.card.info.price / 100}</h5>
        <p>{item.card.info.description}</p>
      </div>
      <div className="item-image">
        <img
          width={200}
          height={200}
          src={IMAGE_CDN_URL + item.card.info.imageId}
          alt="Restaurant"
        />
        <button>Add to cart</button>
      </div>
    </div>
  );
};
