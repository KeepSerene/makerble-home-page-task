import "./App.css";

// React imports
import { useState } from "react";

// Component imports
import Navbar from "./components/navbar/Navbar";
import LeftSidebar from "./components/left-sidebar/LeftSidebar";
import FilterTabs from "./components/filter-tabs/FilterTabs";
import ContentCards from "./components/contentCards/ContentCards";
import RightSidebar from "./components/right-sidebar/RightSidebar";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setActiveNavItem(null);
  };

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
    setActiveFilter("all");
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
          <FilterTabs
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />

          <ContentCards
            activeFilter={activeFilter}
            activeNavItem={activeNavItem}
          />
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
