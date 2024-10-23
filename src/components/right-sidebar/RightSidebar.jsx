import "./rightSidebar.css";

// React imports
import { useRef, useState } from "react";

// Icon imports
import { ClipboardPen, Plus } from "lucide-react";
import AddBoardModal from "./add-board-modal/AddBoardModal";

// Component imports
import PersonalProgress from "./personal-progress/PersonalProgress";
import Tasks from "./tasks/Tasks";
import { Followers, Following } from "./social/SocialCards";

function RightSidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addBoardBtnRef = useRef(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    if (addBoardBtnRef.current) {
      addBoardBtnRef.current.focus(); // Return focus to the add-btn when modal closes
    }
  };

  const handleAddBoard = (newBoard) => {
    setBoards((prevBoards) => [newBoard, ...prevBoards]);
  };

  const [boards, setBoards] = useState([
    { id: 1, title: "Angola production", description: "Some description..." },
    {
      id: 2,
      title: "Attendence reporting",
      description: "Some description...",
    },
    { id: 3, title: "CHIVA RYH", description: "Some description..." },
  ]);

  return (
    <aside className="right-sidebar">
      {/* Boards */}
      <div className="sidebar-card">
        <section className="card-header">
          <h2>Boards</h2>

          <button
            type="button"
            ref={addBoardBtnRef}
            onClick={handleOpenModal}
            aria-label="Click to add a new board"
            title="Add new board"
            className="add-btn"
          >
            <Plus size={16} />
          </button>
        </section>

        <div className="boards-list">
          {boards.map((board) => (
            <div key={board.id} className="board-item">
              <ClipboardPen size={16} />

              <div className="board-details">
                <span className="board-title">{board.title}</span>
                <span className="board-description">{board.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PersonalProgress />

      <Tasks />

      {/* Social cards */}
      <Followers />
      <Following />

      <AddBoardModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddBoard={handleAddBoard}
      />
    </aside>
  );
}

export default RightSidebar;
