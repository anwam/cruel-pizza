import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="dark:text-slate-100 dark:bg-slate-800 container mx-auto p-4">
      <div className="flex flex-row justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} />
        </a>
      </div>
      <main className="bg-slate-500 p-4 rounded-lg gap-4 flex flex-col container">
        <h1 className="text-xl font-bold rounded-full w-fit bg-slate-600 py-2 px-4">
          Vite + React
        </h1>
        <p>นี่คือพารากราฟ</p>
        <span>this is span</span>
      </main>
    </div>
  );
}

export default App;
