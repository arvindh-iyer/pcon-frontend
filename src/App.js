import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TeamPage } from "./pages/TeamPage";
import { Reviews } from "./pages/Reviews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/team" element={<TeamPage></TeamPage>}></Route>
      <Route path="/reviews" element={<Reviews></Reviews>}></Route>
    </Routes>
  );
}

export default App;
