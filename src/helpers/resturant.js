export const mapResturants = (data) => {
  console.log(data);
  const resturantsData =
    data?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  return resturantsData || [];
};

export const getMenuItems = (resturantData) => {
  const menuItems =
    resturantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;
  return menuItems;
};

export const getResturantInfo = (resturantData) => {
  const resturantInfo = resturantData?.data?.cards[2]?.card?.card?.info;
  return resturantInfo;
};

export const filterResturant = (
  showTopRatedResturantsOnly,
  resturant,
  searchText,
  MIN_RATING = 4.2
) => {
  const matchesRating = showTopRatedResturantsOnly
    ? resturant.info.avgRating > MIN_RATING
    : true;
  const matchesSearch = resturant.info.name
    .toLowerCase()
    .includes(searchText.toLowerCase());
  return matchesRating && matchesSearch;
};
