import TaskCard from "./TaskCard";
import AddTask from "./AddTask";

function Column({
  title,
  tasks,
  type,
  number,
  addTask,
  moveTask,
  deleteTask,
}) {
  return (
    <div className="flex h-[70vh] w-[420px] flex-col rounded-3xl border border-gray-800 bg-[#111827] p-5 shadow-2xl transition duration-300 hover:scale-[1.02] hover:shadow-pink-500/20">

      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-lg font-bold text-white shadow-lg">
          {number}
        </div>

        <h2 className="text-2xl font-bold tracking-wide text-white">
          {title}
        </h2>

      </div>

      <div className="flex-1 overflow-y-auto">

        {tasks.length === 0 ? (
          <div className="mt-20 text-center text-gray-500">

            <p className="text-2xl">✨</p>

            <p className="mt-3 text-lg font-medium">
              No tasks yet
            </p>

            <p className="mt-1 text-sm text-gray-600">
              Add a new task to get started
            </p>

          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              type={type}
              moveTask={moveTask}
              deleteTask={deleteTask}
            />
          ))
        )}

      </div>

      <AddTask
        addTask={addTask}
        type={type}
      />
    </div>
  );
}

export default Column;