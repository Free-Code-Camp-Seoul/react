import "./App.css";
import { AddProfile } from "./Pages/Admin/AddProfile";
import ProfilesPage from "./Pages/Public/ProfilesPage";

function App() {
  // useDatabase();
  return (
    <div className="App">
      <AddProfile />
      <ProfilesPage />
    </div>
  );
}

export default App;
