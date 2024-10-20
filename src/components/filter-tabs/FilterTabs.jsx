import "./filterTabs.css";

function FilterTabs({ activeFilter, onFilterChange }) {
  const filters = ["all", "updates", "events", "projects"];

  return (
    <div className="filter-tabs">
      {filters.map((filter) => (
        <button
          type="button"
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`filter-tab ${activeFilter === filter ? "active" : ""}`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
