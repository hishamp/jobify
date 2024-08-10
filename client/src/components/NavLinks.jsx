import { NavLink } from "react-router-dom";
import links from "../utils/Links";
import { useDashboardContext } from "../pages/DashboardLayout";

// eslint-disable-next-line react/prop-types
const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        const { role } = user;
        if (path === "admin" && role !== "admin") return;
        return (
          <NavLink
            onClick={isBigSidebar ? null : toggleSidebar}
            to={path}
            key={text}
            className="nav-link"
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
