
import Sidebar from "../components/SideBar";
import "./App.css";
function App() {
  return (
    <>
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Welcome!</h1>
        <p>This is your dashboard content.</p>
      </main>
    </div>
    </>
  );
}

export default App;
