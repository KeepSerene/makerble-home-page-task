import "./leftSidebar.css";

// React imports
import { useState } from "react";

// Icon imports
import {
  BookMarked,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Image,
  Users,
} from "lucide-react";

function LeftSidebar({ activeNavItem, onNavItemClick }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { id: "events", icon: <Calendar size={20} />, label: "Events" },
    { id: "projects", icon: <BookMarked size={20} />, label: "Projects" },
    { id: "albums", icon: <Image size={20} />, label: "Albums" },
    {
      id: "organizations",
      icon: <Building2 size={20} />,
      label: "Organizations",
    },
    { id: "contacts", icon: <Users size={20} />, label: "Contacts" },
  ];

  return (
    <nav className={`left-sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button
        type="button"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label="Click to toggle the left sidebar"
        title="Toggle the left sidebar"
        className="collapse-btn"
      >
        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      <div className="nav-items">
        {navItems.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => onNavItemClick(item.id)}
            aria-label={`Click to view ${item.label}`}
            title={isCollapsed ? item.label : ""}
            className={`nav-item ${activeNavItem === item.id ? "active" : ""}`}
          >
            <span className="icon">{item.icon}</span>
            {!isCollapsed && <span className="label">{item.label}</span>}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default LeftSidebar;
