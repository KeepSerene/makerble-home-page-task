import "./personalProgress.css";

// React imports
import { useState } from "react";

function PersonalProgress() {
  const [progressItems] = useState([
    { id: 1, title: "Personal progress 1", progress: 75 },
    { id: 2, title: "Personal progress 2", progress: 45 },
    { id: 3, title: "Personal progress 3", progress: 90 },
  ]);

  return (
    <div className="sidebar-card">
      <section className="card-header">
        <h2>Personal Progress</h2>

        <a href="#" className="parent-board-link">
          Visit board
        </a>
      </section>

      <div className="progress-list">
        {progressItems.map((item) => (
          <div key={item.id} className="progress-item">
            <div className="progress-header">
              <span className="progress-title">{item.title}</span>

              <span className="progress-percentage">{item.progress}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalProgress;
