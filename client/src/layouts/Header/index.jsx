import { NavLink } from "react-router-dom";
import "./index.scss";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png"
            alt="logo"
            className="logo"
          />
          <nav>
            <ul>
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>Shop</NavLink>
              </li>
              <li>
                <NavLink>About</NavLink>
              </li>
              <li>
                <NavLink>Latest</NavLink>
              </li>
              <li>
                <NavLink>Blog</NavLink>
              </li>
              <li>
                <NavLink>Pages</NavLink>
              </li>
              <li>
                <NavLink to={"/add-product"}>Add Watch</NavLink>
              </li>
            </ul>
          </nav>
          <div className="icons">
            <CiSearch />
            <CiUser />
            <CiShoppingCart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
