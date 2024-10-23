import "./social.css";

// Icon imports
import { User, Users } from "lucide-react";

function UserList({ users, title }) {
  return (
    <div className="sidebar-card">
      <section className="card-header">
        <h2>{title}</h2>

        {title === "Followers" ? (
          <Users size={16} className="social-card-icon" />
        ) : (
          <User size={16} className="social-card-icon" />
        )}
      </section>

      <ul role="list" className="social-list">
        {users.map((user) => (
          <li key={user.id}>
            <a href="#" className="social-item">
              <img
                src={user.avatar}
                alt={`${user.name}'s avatar`}
                className="social-avatar"
              />

              <span className="social-name">{user.name}</span>
            </a>
          </li>
        ))}

        <a href="#" className="show-all-link">
          Show all {title}
        </a>
      </ul>
    </div>
  );
}

export function Followers() {
  const followers = [
    { id: 1, name: "Sarah Johnson", avatar: "https://picsum.photos/200" },
    { id: 2, name: "Michael Chen", avatar: "https://picsum.photos/200" },
    { id: 3, name: "Emma Williams", avatar: "https://picsum.photos/200" },
  ];

  return <UserList users={followers} title="Followers" />;
}

export function Following() {
  const following = [
    { id: 1, name: "David Miller", avatar: "https://picsum.photos/200" },
    { id: 2, name: "Lisa Anderson", avatar: "https://picsum.photos/200" },
    { id: 3, name: "James Wilson", avatar: "https://picsum.photos/200" },
  ];

  return <UserList users={following} title="Following" />;
}
