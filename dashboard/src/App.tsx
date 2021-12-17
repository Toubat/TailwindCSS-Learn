import { Sidebar } from "./components/Sidebar";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
