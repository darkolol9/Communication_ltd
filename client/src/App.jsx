import "./App.css";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Register from "./Pages/Register/Register";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot_password" element={<ChangePassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Nothing</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
