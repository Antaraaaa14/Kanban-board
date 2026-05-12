import { FaTrash } from "react-icons/fa";

function TaskCard({
  task,
  type,
  moveTask,
  deleteTask,
}) {
  return (
    <div className="mb-4 rounded-2xl bg-[#030712] p-5 text-white shadow-lg transition hover:border hover:border-pink-500">

      <div className="flex items-start justify-between gap-3">
        <p className="text-lg">
          {task.text}
        </p>

        <button
          onClick={() =>
            deleteTask(task.id, type)
          }
          className="rounded-lg bg-[#111827] p-3 hover:bg-red-500"
        >
          <FaTrash />
        </button>
      </div>

      <button
        onClick={() =>
          moveTask(task, type)
        }
        className="mt-5 rounded-xl bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
      >
        {type === "todo"
          ? "Move to Done"
          : "Move to Todo"}
      </button>
    </div>
  );
}

export default TaskCard;