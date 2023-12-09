import logo from "../../assets/logo.jpg";
import "./style.css";

function Nav() {
  return (
    <div className="navbar">
      <meta name="og:nav" />
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>
          <a href="#" class="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#" class="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#" class="nav-link">
            Menu
          </a>
        </li>
        <li>
          <a href="#" class="nav-link">
            Reservations
          </a>
        </li>
        <li>
          <a href="#" class="nav-link">
            Order Online
          </a>
        </li>
        <li>
          <a href="#" class="nav-link">
            Login
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
