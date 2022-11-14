import Brand from "../../assets/image/brand.png";
import { BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../utils/link";

const Navbar = ({ setToggleMenu, setToggleModal }) => {
  return (
    <nav className="nav container mx-auto">
      <Link to="/" className="nav-brand">
        <img src={Brand} alt="MetaBnB" />
      </Link>
      <ul className="nav-link">
        {navLinks.map((link) =>
          link.dummy ? (
            <li key={link.id}>
              <Link to={link.to}>{link.name}</Link>
            </li>
          ) : (
            <li key={link.id}>
              <NavLink to={link.to}>{link.name}</NavLink>
            </li>
          )
        )}
      </ul>
      <button className="nav-btn" onClick={() => setToggleModal(true)}>
        Connect Wallet
      </button>
      <div className="nav-menu">
        <BiMenu
          size={24}
          onClick={() => setToggleMenu(true)}
          className="mr-3"
        />
      </div>
    </nav>
  );
};

export default Navbar;
