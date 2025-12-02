import { useEffect, useState } from "react";
import { IMAGE_CDN_URL } from "../utils/image.constants";
import { Link, useParams } from "react-router-dom";
export const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurantMenu/" +
          id,
        { headers: {} }
      );
      const data = await response.json();
      setResInfo(data);
    } catch (error) {
      console.log("Error fetching restaurants:", error);
    }
  };

  const menuItems =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  return (
    <div className="resturant-menu">
      <div>
        <Link to="/resturants">⬅️ Back to resturants</Link>
      </div>
      <div className="resturant-info">
        <img
          width={200}
          height={200}
          src={
            IMAGE_CDN_URL +
            resInfo?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId
          }
          alt="Restaurant"
        />

        <div className="resturant-basic-details">
          <h1>{resInfo?.data?.cards[2]?.card?.card?.info?.name}</h1>

          <h2>
            Cost for 2:{" "}
            {resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
          </h2>

          <h3>
            Cuisines:{" "}
            {resInfo?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
          </h3>
        </div>
      </div>

      <div className="menu-items">
        {menuItems?.map((item) => (
          <div key={item.card.info.id} className="menu-item">
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
        ))}
      </div>
    </div>
  );
};
