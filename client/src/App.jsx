import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Register from "./Pages/Register/Register";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        {loading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot_password" element={<ChangePassword />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
