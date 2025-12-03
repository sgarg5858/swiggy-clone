import { ResturantMenuItem } from "./ResturantMenuItem";
export const ResturantMenuSection = (props) => {
  const {
    data: { title, itemCards: resturantMenuItems },
  } = props;
  return (
    <div className="menu-section">
      <details>
        <summary>{title} ({resturantMenuItems?.length})</summary>
        <div className="menu-items">
          {resturantMenuItems?.map((item) => (
            <ResturantMenuItem key={item.id} item={item} />
          ))}
        </div>
      </details>
    </div>
  );
};
