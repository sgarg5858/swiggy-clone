import RestaurantList from "./ResturantList";

const MainComponent = () => {
  return (
    <div className="main">
      <div className="search">
        <input type="text" placeholder="Search for restaurants or cuisines" />
        <button>Search</button>
      </div>
      <RestaurantList />
    </div>
  );
};

export default MainComponent;
