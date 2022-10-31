import { Link, NavLink } from "react-router-dom";
import '../styles/Header.css';

function Header() 
{
  return (
    <div className="headerMainContent">
      <Link to="/" className="titleHead">S H O P</Link>
      <nav className="navBtnsHead">
        <NavLink 
          className={({ isActive }) => (isActive ? "linkHead active" : "linkHead")}
          to="/">
          Home
        </NavLink>
        <NavLink 
          className={({ isActive }) => (isActive ? "linkHead active" : "linkHead")} 
          to="products">
          Products
        </NavLink>
        {/* <Link to="products" className="linkHead" >Products</Link> */}
      </nav>
    </div>
  );
}

export default Header;
