import { NavLink } from "react-router-dom";
import { getLocaleName } from "../utils/helpers";

const PAGES = ["catalog", "favorites"];

export default function Header() {
  return (
    <header>
      <div className="container">
        {PAGES.map((page, index) => (
          <NavLink
            className="Page"
            style={({ isActive }) => ({
              color: isActive ? "#ffffff" : "#f0f0f0",
              fontWeight: isActive ? 600 : 400,
              backgroundColor: isActive ? "#1E88E5" : "#2196f3",
            })}
            key={page + index}
            to={`/${page !== "catalog" ? page : ""}`}
          >
            {getLocaleName(page)}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
