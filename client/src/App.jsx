import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Register from "./Pages/Register/Register";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="*" element={<h1>NOT IMPLEMENTED YET</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot_password" element={<ChangePassword />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
