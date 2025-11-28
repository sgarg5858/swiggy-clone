import ReactDOM from "react-dom/client";
import { resObj } from "./data";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          width={100}
          height={100}
          src="https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/68044/optimized_product_thumb_stage.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

const MainComponent = () => {
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

const FooterComponent = () => {
  return (
    <div className="footer">
      <h4>© 2024 Swiggy Clone. All rights reserved.</h4>
    </div>
  );
};

const AppComponent = () => {
  return (
    <div id="app" className="app">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
