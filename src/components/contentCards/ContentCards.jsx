import "./contentCards.css";

// Data import
import { sampleData } from "../../data/sampleData";

// Icon imports
import { AtSign, Building2, FolderOpen } from "lucide-react";

function ContentCards({ activeFilter, activeNavItem, userUpdates = [] }) {
  const getContent = () => {
    if (activeNavItem) {
      return sampleData[activeNavItem] || [];
    }

    if (activeFilter === "all") {
      return [
        ...userUpdates,
        ...sampleData.updates,
        ...sampleData.events,
        ...sampleData.projects,
      ];
    }

    if (activeFilter === "updates") {
      return [...userUpdates, ...sampleData.updates];
    }

    return sampleData[activeFilter] || [];
  };

  const renderCard = (item) => {
    switch (item.type) {
      case "update":
        return (
          <div className="content-card update">
            <div className="card-header">
              <img
                src="https://picsum.photos/200"
                alt="Author avatar"
                className="author-avatar"
              />

              <section className="author-info">
                <h3>{item.author}</h3>
                <span className="timestamp">{item.timestamp}</span>
              </section>
            </div>

            <section className="card-content">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </section>
          </div>
        );

      case "event":
        return (
          <div className="content-card event">
            <section className="card-content">
              <h4>{item.title}</h4>
              <p>
                {item.date} at {item.time}
              </p>
              <p>{item.location}</p>
            </section>
          </div>
        );

      case "project":
        return (
          <div className="content-card project">
            <section className="card-content">
              <h4>{item.title}</h4>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>

              <p>Deadline: {item.deadline}</p>
            </section>
          </div>
        );

      case "album":
        return (
          <div className="content-card album">
            <div className="card-header">
              <FolderOpen size={20} className="card-icon" />

              <section className="card-info">
                <h4>{item.title}</h4>
                <p>{item.imageCount} images</p>
              </section>
            </div>
          </div>
        );

      case "organization":
        return (
          <div className="content-card organization">
            <div className="card-header">
              <Building2 size={20} className="card-icon" />

              <section className="card-info">
                <h4>{item.title}</h4>
                <p>Role: {item.role}</p>
              </section>
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="content-card contact">
            <div className="card-header">
              <img
                src="https://picsum.photos/200"
                alt={`${item.name}'s avatar`}
                className="author-avatar"
              />

              <section className="card-info">
                <h4>{item.name}</h4>
                <p>
                  <AtSign size={14} className="inline-icon" /> {item.tag}
                </p>
                <p className="department">{item.department}</p>
              </section>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const content = getContent();

  return (
    <div className="content-cards">
      {content.map((item) => (
        <div key={item.id} className="card-wrapper">
          {renderCard(item)}
        </div>
      ))}
    </div>
  );
}

export default ContentCards;
