import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
export const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const cartCount = useSelector((store) => store.cart.count);
  console.log(cart);

  return cartCount === 0 ? (
    <h1>Your cart is empty</h1>
  ) : (
    <div className="cart-items">
      {cart?.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};
