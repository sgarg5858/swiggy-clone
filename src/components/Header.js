import { LOGO_URL } from "../utils/image.constants";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" width={100} height={100} src={LOGO_URL} />
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/"> Resturants</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
