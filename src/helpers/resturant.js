export const mapResturants = (data) => {
  console.log(data);
  const resturantsData =
    data?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  resturantsData.map((res, index) => {
    const updatedRes = {
      ...res,
      info: {
        ...res.info,
        promoted: index % 2 === 0,
      },
    };
    console.log(updatedRes);
    return updatedRes;
  });
  return resturantsData || [];
};

export const getMenuSections = (resturantData) => {
  const menuSections =
    resturantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter((section) =>
        section?.card?.card?.["@type"]?.toLowerCase().includes("itemcategory")
      )
      .map((section) => {
        const sectionInfo = section?.card?.card;
        return {
          ...sectionInfo,
          itemCards: sectionInfo?.itemCards.map((itemCard) => {
            return { ...itemCard?.card?.info };
          }),
        };
      });
  return menuSections;
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
