import Board from "./components/Board";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-black px-6 py-8">

      <div className="mb-14 text-center">

        <h1
          className="cursor-pointer bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-7xl font-black tracking-[10px] text-transparent transition duration-500 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(236,72,153,0.9)]"
          style={{ fontFamily: "Orbitron" }}
        >
          KANBAN BOARD
        </h1>

        <p className="mt-4 text-lg tracking-wide text-gray-400">
          Organize your workflow beautifully
        </p>

      </div>

      <Board />

    </div>
  );
}

export default App;