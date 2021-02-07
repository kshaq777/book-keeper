import { Link, useLocation } from "react-router-dom";
import "../styles/main.css"

function Nav() {
const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{backgroundColor: "#A5B586"}}
    >
      <div className="navbar-brand">
        <Link
          to="/"
          style={{color: "#ffffff", fontWeight: "bold"}}
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Book Keeper
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <div className="nav-item">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to="/dashboard"
              className={
                location.pathname === "/dashboard"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Dashboard
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to="/search"
              className={
                location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
