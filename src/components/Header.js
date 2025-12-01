import { LOGO_URL } from "../utils/image.constants";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" width={100} height={100} src={LOGO_URL} />
      </div>
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
