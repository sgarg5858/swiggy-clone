export const HeaderComponent = () => {
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