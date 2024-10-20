import "./navbar.css";

// Icon imports
import { Bell } from "lucide-react";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <a href="#" className="navbar-logo">
          <div className="logo">M</div>
        </a>

        <div className="navbar-links">
          <a href="#" className="nav-link">
            My apps
          </a>

          <a href="#" className="nav-link active">
            Home
          </a>

          <a href="#" className="nav-link">
            Explore
          </a>
        </div>

        <div className="navbar-actions">
          <button
            type="button"
            className="notification-btn"
            aria-label="Click to view notifications"
          >
            <Bell />
          </button>

          <img
            src="https://picsum.photos/200"
            alt="User avatar"
            className="avatar"
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
