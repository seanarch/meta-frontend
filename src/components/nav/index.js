import { Fragment } from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import logo from "../../assets/logo.jpg";
import "./style.css";

function Nav() {
  return (
    <Fragment>
      <div className="navbar">
        <meta name="og:nav" />
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li>
            <Link to="/" class="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" class="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/#" class="nav-link">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/#" class="nav-link">
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/#" class="nav-link">
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/#" class="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" />
        <Route path="/about" element={<About />} />
      </Routes>
    </Fragment>
  );
}

export default Nav;
