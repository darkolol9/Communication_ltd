import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Register from "./Pages/Register/Register";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import { createContext, useEffect, useState } from "react";
import HomePage from "./Pages/HomePage/HomePage";

export const UserContext = createContext();

function App() {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    let loggedIn = localStorage.getItem('logged_in');
    let tempEmail = localStorage.getItem('email');

    if (loggedIn === 'true') {
      setIsLoggedIn(true);
      setEmail(tempEmail);
    }
  }, [])


  const setLoggedInStatus = (newValue) => {
    localStorage.setItem("logged_in", newValue);
    setIsLoggedIn(newValue);
  };

  const setUserEmail = (email) => {
    localStorage.setItem('email', email);
    setEmail(email);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  return (
    <UserContext.Provider value={{isLoggedIn, email, setLoggedInStatus, setUserEmail}}>
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
    </UserContext.Provider>
  );
}

export default App;
