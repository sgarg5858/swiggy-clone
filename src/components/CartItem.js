import { IMAGE_CDN_URL } from "../utils/image.constants";
import { useDispatch } from "react-redux";
import { addItem,removeItem } from "../store/cartSlice";
export const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  function addItemToCart() {
    dispatch(addItem(item));
  }

   function removeItemFromCart() {
    dispatch(removeItem(item));
  }


  return (
    <div className="menu-item">
      <div className="item-details">
        <h4>{item?.name}</h4>
        <h5>Price: ₹{item?.price / 100}</h5>
        <p>{item?.description}</p>
      </div>
      <div className="item-image">
        <img
          width={100}
          height={100}
          src={IMAGE_CDN_URL + item?.imageId}
          alt="Restaurant"
        />
        <div>
            <button onClick={removeItemFromCart}>-</button>
            <strong>{item?.count}</strong>
            <button onClick={addItemToCart}>+</button>
        </div>
      </div>
    </div>
  );
};
