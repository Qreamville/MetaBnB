import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../utils/link";
import { BiX } from "react-icons/bi";

const Sidebar = ({ toggleMenu, setToggleMenu }) => {
  return (
    <aside className={`nav-sidebar ${toggleMenu ? "right-0" : "-right-full"}`}>
      <BiX
        size={28}
        className="ml-auto text-white cursor-pointer mr-6"
        onClick={() => setToggleMenu(false)}
      />
      <ul className="nav-sidebar__link mt-6">
        {navLinks.map((link) =>
          link.dummy ? (
            <li key={link.id} onClick={() => setToggleMenu(false)}>
              <Link to={link.to}>{link.name}</Link>
            </li>
          ) : (
            <li key={link.id} onClick={() => setToggleMenu(false)}>
              <NavLink to={link.to}>{link.name}</NavLink>
            </li>
          )
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
