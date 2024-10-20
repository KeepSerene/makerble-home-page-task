import "./contentCards.css";

// Data import
import { sampleData } from "../../data/sampleData";

function ContentCards({ activeFilter, activeNavItem }) {
  const getContent = () => {
    if (activeNavItem) {
      return sampleData[activeNavItem] || [];
    }

    if (activeFilter === "all") {
      return [
        ...sampleData.updates,
        ...sampleData.events,
        ...sampleData.projects,
      ];
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
