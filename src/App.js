import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Logout from "./pages/Logout";
import ReservarFechas from "./pages/ReservarFechas";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Navbar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<SignupForm />}></Route>
              <Route path="/login" element={<LoginForm />}></Route>
              <Route path="/signup" element={<SignupForm />}></Route>
              <Route path="/logout" element={<Logout />}></Route>
              <Route path="/fechas" element={<ReservarFechas />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
