import { ResturantMenuItem } from "./ResturantMenuItem";
export const ResturantMenuSection = (props) => {
  const {
    data: { title, itemCards: resturantMenuItems },
    currentExpanded,
    setCurrentExpanded,
  } = props;
  return (
    <div className="menu-section">
      <details
        onToggle={() => {
          setCurrentExpanded(currentExpanded === title ? null : title);
        }}
      >
        <summary>
          {title} ({resturantMenuItems?.length})
        </summary>
        <div className="menu-items">
          {currentExpanded === title &&
            resturantMenuItems?.map((item) => (
              <ResturantMenuItem key={item.id} item={item} />
            ))}
        </div>
      </details>
    </div>
  );
};
