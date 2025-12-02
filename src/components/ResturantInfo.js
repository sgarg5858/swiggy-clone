import { IMAGE_CDN_URL } from "../utils/image.constants";

export const ResturantInfo = ({ resturantInfo }) => {
  return (
    <div className="resturant-info">
      <img
        width={200}
        height={200}
        src={IMAGE_CDN_URL + resturantInfo?.cloudinaryImageId}
        alt="Restaurant"
      />

      <div className="resturant-basic-details">
        <h1>{resturantInfo?.name}</h1>

        <h2>Cost for 2: {resturantInfo?.costForTwoMessage}</h2>

        <h3>Cuisines: {resturantInfo?.cuisines.join(", ")}</h3>
      </div>
    </div>
  );
};
