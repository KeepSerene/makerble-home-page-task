import "./rightSidebar.css";

// Icon imports
import { Calendar, Plus } from "lucide-react";

function RightSideBar() {
  const upcomingEvents = [
    { id: 1, title: "Team Meeting", date: "Oct 21, 2024" },
    { id: 2, title: "Project Deadline", date: "Oct 23, 2024" },
  ];

  const tasks = [
    { id: 1, title: "Complete Documentation", progress: 75 },
    { id: 2, title: "Review Pull Requests", progress: 45 },
  ];

  return (
    <aside className="right-sidebar">
      {/* Upcoming Events */}
      <div className="sidebar-card">
        <section className="card-header">
          <h2>Upcoming Events</h2>

          <button
            type="button"
            aria-label="Click to add a new event"
            title="Add new event"
            className="add-btn"
          >
            <Plus size={16} />
          </button>
        </section>

        <div className="events-list">
          {upcomingEvents.map((upcomingEvent) => (
            <div key={upcomingEvent.id} className="event-item">
              <Calendar size={16} />

              <div className="event-details">
                <span className="event-title">{upcomingEvent.title}</span>
                <span className="event-date">{upcomingEvent.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tasks & Progress */}
      <div className="sidebar-card">
        <section className="card-header">
          <h2>Tasks & Progress</h2>

          <button
            type="button"
            aria-label="Click to add a new task"
            title="Add new task"
            className="add-btn"
          >
            <Plus size={16} />
          </button>
        </section>

        <div className="tasks-list">
          {tasks.map((task) => (
            <div key={task.id} className="task-item">
              <div className="task-header">
                <span className="task-title">{task.title}</span>
                <span className="task-progress">{task.progress}%</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default RightSideBar;
