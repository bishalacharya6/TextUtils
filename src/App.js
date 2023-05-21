import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Aboutus from "./components/Aboutus";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#79b8a6";
      showAlert("Dark Mode is enabled", "success");
      document.title = "TextUtils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
        <div>
          <Alert alert={alert} />
        </div>

        <div>
          <Routes>
            <Route
              path="/"
              element={<Textform showAlert={showAlert} mode={mode} />}
            />
            <Route path="/about" element={<Aboutus mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
