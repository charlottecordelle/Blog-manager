import { Link, useLocation } from "react-router-dom";
import { Home, Menu, Plus } from "lucide-react";
import "./Header.css";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-box">
          <span>C</span>
        </div>

        <h1 className="header-title">CHA'BLOG</h1>

        <div className="header-icons">
          <Link
            to="/"
            className={`icon-button ${
              location.pathname === "/" ? "active-button" : ""
            }`}
          >
            <Home size={20} />
          </Link>
          <Link
            to="/all"
            className={`icon-button ${
              location.pathname === "/all" ? "active-button" : ""
            }`}
          >
            <Menu size={20} />
          </Link>
          <Link
            to="/new"
            className={`icon-button ${
              location.pathname === "/new" ? "active-button" : ""
            }`}
          >
            <Plus size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
