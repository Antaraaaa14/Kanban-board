import { useState } from "react";
import Column from "./Column";

function Board() {
  const [todoTasks, setTodoTasks] = useState([
    {
      id: 1,
      text: "Complete revision of JavaScript Notes",
    },
  ]);

  const [doneTasks, setDoneTasks] = useState([
    {
      id: 2,
      text: "Complete Aptitude Notes ",
    },
  ]);

  const addTask = (column, text) => {
    const newTask = {
      id: Date.now(),
      text,
    };

    if (column === "todo") {
      setTodoTasks([...todoTasks, newTask]);
    } else {
      setDoneTasks([...doneTasks, newTask]);
    }
  };

  const moveTask = (task, from) => {
    if (from === "todo") {
      setTodoTasks(
        todoTasks.filter((t) => t.id !== task.id)
      );

      setDoneTasks([...doneTasks, task]);
    } else {
      setDoneTasks(
        doneTasks.filter((t) => t.id !== task.id)
      );

      setTodoTasks([...todoTasks, task]);
    }
  };

  const deleteTask = (id, column) => {
    if (column === "todo") {
      setTodoTasks(
        todoTasks.filter((t) => t.id !== id)
      );
    } else {
      setDoneTasks(
        doneTasks.filter((t) => t.id !== id)
      );
    }
  };

  return (
    <div>

      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-center gap-8">

        <Column
          title="Todo"
          number="1"
          tasks={todoTasks}
          type="todo"
          addTask={addTask}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />

        <Column
          title="Done"
          number="2"
          tasks={doneTasks}
          type="done"
          addTask={addTask}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />

      </div>

      <div className="mt-10 text-center">

        <p className="text-lg tracking-wide text-gray-400">
          Total Tasks :
          <span className="ml-2 font-bold text-pink-500">
            {todoTasks.length + doneTasks.length}
          </span>
        </p>

        <p className="mt-2 text-lg tracking-wide text-gray-400">
          Completed Tasks :
          <span className="ml-2 font-bold text-green-400">
            {doneTasks.length}
          </span>
        </p>

      </div>

    </div>
  );
}

export default Board;