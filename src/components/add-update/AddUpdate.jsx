import "./addUpdate.css";

// React imports
import { useState } from "react";

// Library imports
import { toast } from "react-toastify";

function AddUpdate({ onAddUpdate }) {
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateContent, setUpdateContent] = useState("");
  const [statusMsg, setStatusMsg] = useState("");
  const [shouldThrowErr, setShouldThrowErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (updateTitle.trim().length < 4 || updateContent.trim().length < 4) {
      toast.error(
        "An update title or content must be at least 4 characters long!"
      );

      setStatusMsg(
        "An update title or content must be at least 4 characters long!"
      );

      setShouldThrowErr(true);
      return;
    }

    const newUpdate = {
      id: Date.now(),
      type: "update",
      title: updateTitle.trim(),
      content: updateContent.trim(),
      author: "John Doe",
      timestamp: "Just now",
    };

    onAddUpdate(newUpdate);

    setUpdateTitle("");
    setUpdateContent("");
    toast.success("Update posted successfully!");
    setStatusMsg("Update posted successfully!");
    setShouldThrowErr(false);
    setTimeout(() => setStatusMsg(""), 5000);
  };

  return (
    <div className="add-update-container">
      <div className="update-header">
        <img
          src="https://picsum.photos/200"
          alt="User avatar"
          className="user-avatar"
        />

        <section className="user-info">
          <h4>John Doe</h4>

          <span className="update-prompt">Share an update...</span>
        </section>
      </div>

      <form action="" onSubmit={handleSubmit} className="update-form">
        <div className="input-container">
          <label htmlFor="update-title" className="sr-only">
            Enter your update title
          </label>

          <input
            type="text"
            id="update-title"
            value={updateTitle}
            onChange={(event) => setUpdateTitle(event.target.value)}
            placeholder="Set update title"
            className="user-input"
          />
        </div>

        <div className="input-container">
          <label htmlFor="update" className="sr-only">
            Enter your update
          </label>

          <textarea
            id="update"
            value={updateContent}
            onChange={(event) => setUpdateContent(event.target.value)}
            placeholder="What's on your mind?"
            rows={3}
            className="user-input"
          />
        </div>

        <div className="form-actions">
          <button
            type="submit"
            disabled={!(updateTitle.trim() && updateContent.trim())}
            className="post-btn"
          >
            Post update
          </button>
        </div>
      </form>

      <p
        className="status-msg"
        style={{ color: shouldThrowErr ? "red" : "limegreen" }}
      >
        {statusMsg ? statusMsg : ""}
      </p>
    </div>
  );
}

export default AddUpdate;
