import { useResturantList } from "../utils/useResturantList";
import RestaurantList from "./ResturantList";
import Shimmer from "./Shimmer";

const MainComponent = () => {
  const {
    resturants,
    filteredRestaurants,
    searchText,
    setSearchText,
    showTopRatedResturantsOnly,
    setShowTopRatedResturantsOnly,
  } = useResturantList();

  

  return resturants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setShowTopRatedResturantsOnly((prevState) => !prevState);
          }}
        >
          {showTopRatedResturantsOnly
            ? "Show All Resturants"
            : "Show Top Rated Resturants Only"}
        </button>

        <div className="search-bar">
          <input
            type="search"
            placeholder="Search Resturants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <h1 className="resturants-heading">
        {showTopRatedResturantsOnly ? "Top Rated" : "All Resturants"}
      </h1>
      <RestaurantList resturants={filteredRestaurants} />
    </div>
  );
};

export default MainComponent;

