import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Enable Light Mode");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark Mode Enabled!", "success")
    } else {
      setMode("light");
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        modeText={modeText}
        toggleMode={toggleMode}
      />
      <Alert
        alert = {alert}
      />
      <div className="container my-5">
      <Routes>
          <Route exact path="/about" element={<About title = "About us" mode={mode}/>}></Route>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert = {showAlert} />}></Route>
      </Routes>
      </div>
      </Router>
    </>
  );
}
export default App;
