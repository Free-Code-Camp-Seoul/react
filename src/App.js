import logo from "./logo.svg";
import "./App.css";
import useDatabase from "./firebase/useDatabse";
import Profile from "./Profile";

function App() {
  // useDatabase();
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
