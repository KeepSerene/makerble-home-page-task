import "./addBoardModal.css";

// React imports
import { useEffect, useRef, useState } from "react";

// Library imports
import { X } from "lucide-react";
import { toast } from "react-toastify";

function AddBoardModal({ isOpen, onClose, onAddBoard }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [statusMsg, setStatusMsg] = useState("");
  const [shouldThrowErr, setShouldThrowErr] = useState(false);

  const firstInputRef = useRef(null);

  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus(); // Set focus on the first input when modal opens
    }
  }, [isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim().length < 3) {
      toast.error("Board title must be at least 3 characters long!");
      setStatusMsg("Board title must be at least 3 characters long!");
      setShouldThrowErr(true);
      return;
    }

    const newBoard = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim() || "No description provided",
    };

    onAddBoard(newBoard);
    toast.success("Board created successfully!");
    setStatusMsg("Board created successfully!");
    setTimeout(() => setStatusMsg(""), 5000);
    setShouldThrowErr(false);
    setTitle("");
    setDescription("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="modal-overlay"
    >
      <div className="modal-container">
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">
            Add New Board
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Click to close the modal"
            className="modal-close-btn"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="board-title" className="form-label">
              Board Title
            </label>

            <input
              type="text"
              ref={firstInputRef}
              id="board-title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter board title"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="board-description"
              id="modal-description"
              className="form-label"
            >
              Description
            </label>

            <textarea
              id="board-description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Enter board description"
              rows={3}
              className="form-textarea"
            />
          </div>

          <p
            className="status-msg"
            style={{ color: shouldThrowErr ? "red" : "limegreen" }}
          >
            {statusMsg ? statusMsg : ""}
          </p>

          <div className="modal-footer">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!title.trim()}
              className="btn btn-primary"
            >
              Create Board
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBoardModal;
