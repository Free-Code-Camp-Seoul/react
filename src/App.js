import logo from "./logo.svg";
import "./App.css";
import useDatabase from "./firebase/useDatabse";
import Profile from "./Profile";
import { AddProfile } from "./Pages/Admin/AddProfile";

function App() {
  // useDatabase();
  return (
    <div className="App">
      <AddProfile />
      <Profile />\
    </div>
  );
}

export default App;
