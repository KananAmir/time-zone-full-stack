import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import FavoritesContext from "../../context/favoritesCotext";
import BasketContext from "../../context/basketContext";

const Header = () => {
  const { favs } = useContext(FavoritesContext);
  const { basket } = useContext(BasketContext);
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
                <NavLink to={"/"}>Home</NavLink>
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
            <Link to={"/favorites"}>
              <CiHeart /> <sup>{favs.length}</sup>
            </Link>
            <Link to={"/basket"}>
              <CiShoppingCart />{" "}
              <sup>{basket.reduce((sum, curr) => sum + curr.count, 0)}</sup>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
