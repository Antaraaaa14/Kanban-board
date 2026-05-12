import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

function AddTask({ addTask, type }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    addTask(type, text);
    setText("");
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
        className="mb-3 w-full rounded-xl border border-gray-700 bg-[#030712] p-4 text-white outline-none"
      />

      <button
        onClick={handleAdd}
        className="flex items-center gap-2 text-lg text-white"
      >
        <FaPlusCircle />
        Add Task
      </button>
    </div>
  );
}

export default AddTask;