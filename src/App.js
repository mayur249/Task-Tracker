import Header from "./components/Header";
import { useState } from "react";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Hey",
      day: "Feb 5th at 7:06am",
      reminder: true,
    },
    {
      id: 2,
      text: "Hey",
      day: "Feb 5th at 7:06am",
      reminder: true,
    },
    {
      id: 3,
      text: "Hey",
      day: "Feb 5th at 7:06am",
      reminder: true,
    },
    {
      id: 4,
      text: "Hey",
      day: "Feb 5th at 7:06am",
      reminder: true,
    },
  ]);
  const [showAddTask, setShowAddTask] = useState(false);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    // setTasks(tasks.p;
  };

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const onClickAdd = (value) => {
    setShowAddTask(value);
  };

  return (
    <div className="container">
      <Header
        title="Tracker"
        clickAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} clickAdd={onClickAdd} />}
      {tasks.length > 0 ? (
        <Task Tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
};

export default App;
