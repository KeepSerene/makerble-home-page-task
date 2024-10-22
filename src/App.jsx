import "./App.css";

// React imports
import { useState } from "react";

// Component imports
import Navbar from "./components/navbar/Navbar";
import LeftSidebar from "./components/left-sidebar/LeftSidebar";
import FilterTabs from "./components/filter-tabs/FilterTabs";
import ContentCards from "./components/contentCards/ContentCards";
import RightSidebar from "./components/right-sidebar/RightSidebar";
import AddUpdate from "./components/add-update/AddUpdate";

// Library imports
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [updates, setUpdates] = useState([]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setActiveNavItem(null);
  };

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
    setActiveFilter("all");
  };

  const handleAddUpdate = (newUpdate) => {
    setUpdates((prevUpdates) => [newUpdate, ...prevUpdates]);
  };

  return (
    <div className="app">
      <Navbar />

      <div className="main-container">
        <LeftSidebar
          activeNavItem={activeNavItem}
          onNavItemClick={handleNavItemClick}
        />

        <main className="content">
          {(activeFilter === "all" || activeFilter === "updates") && (
            <AddUpdate onAddUpdate={handleAddUpdate} />
          )}

          <FilterTabs
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />

          <ContentCards
            activeFilter={activeFilter}
            activeNavItem={activeNavItem}
            userUpdates={updates}
          />
        </main>

        <RightSidebar />
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
