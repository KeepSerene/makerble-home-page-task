import "./tasks.css";

// React imports
import { useState } from "react";

// Library imports
import { CheckCircle, Circle, Plus } from "lucide-react";
import { toast } from "react-toastify";

function Tasks() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review documentation", completed: false },
    { id: 2, title: "Update dependencies", completed: false },
    { id: 3, title: "Write unit tests", completed: false },
    { id: 4, title: "Deploy to production", completed: false },
  ]);

  const handleAddTask = (event) => {
    event.preventDefault();
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false,
    };

    setTasks([task, ...tasks]);
    setNewTask("");
    toast.success("Task added successfully!");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="sidebar-card">
      <section className="card-header">
        <h2>Tasks</h2>

        <span className="task-count">
          {completedCount} done • {tasks.length} total
        </span>
      </section>

      <form onSubmit={handleAddTask} className="add-task-form">
        <label htmlFor="task-input" className="sr-only">
          Enter a new task
        </label>

        <input
          type="text"
          id="task-input"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Add a new task"
          className="task-input"
        />

        <button
          type="submit"
          disabled={!newTask.trim()}
          aria-label="Add task"
          title="Add task"
          className="add-task-btn"
        >
          <Plus size={16} />
        </button>
      </form>

      <div className="tasks-list">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <button
              type="button"
              onClick={() => toggleTask(task.id)}
              aria-label={`Mark "${task.title}" as ${
                task.completed ? "incomplete" : "complete"
              }`}
              title={`Mark "${task.title}" as ${
                task.completed ? "incomplete" : "complete"
              }`}
              className="task-toggle-btn"
            >
              {task.completed ? (
                <CheckCircle size={16} className="check-icon" />
              ) : (
                <Circle size={16} className="check-icon" />
              )}
            </button>

            <span className="task-title">{task.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
