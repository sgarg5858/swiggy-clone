import { useContext, cont } from "react";
import { LOGO_URL } from "../utils/image.constants";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
const HeaderComponent = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);

  function updateUserContext(event) {
    setUserName(event.target.value);
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" width={100} height={100} src={LOGO_URL} />
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/groceries"> Groceries</Link>
          </li>
          <li>
            {" "}
            <Link to="/resturants"> Resturants</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
          <li>
            <p>Cart</p>
          </li>
          <li>
            <input
              value={loggedInUser}
              onChange={($event) => updateUserContext(event)}
            />
          </li>
          <li>
            <h5>{loggedInUser}</h5>
          </li>
          <li>
            <UserContext.Consumer>
              {({ loggedInUser }) => <h5>{loggedInUser}</h5>}
            </UserContext.Consumer>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
