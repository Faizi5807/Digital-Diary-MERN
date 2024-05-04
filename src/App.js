import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Notestate from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 800);
  };
  const changeMode = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#151B54";
      showAlert("You are in a Night Mode Color", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#151B54";
      showAlert("You are in a Night Mode Color", "success");
    }
  };
  const Ymode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#efcc00";
      showAlert("You are in a Day Mode Color", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#efcc00";
      showAlert("You are in a Day Mode Color", "success");
    }
  };
  const Rmode = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#8b0000";
      showAlert("You are in a Night Mode Color", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#8b0000";
      showAlert("You are in a Night Mode Color", "success");
    }
  };
  const Gmode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#00ff7f";
      showAlert("You are in a Day Mode Color", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#00ff7f";
      showAlert("You are in a Day Mode Color", "success");
    }
  };
  return (
    <>
      <Notestate>
        <BrowserRouter>
          <Navbar
            title="TEXTUTILS"
            mode={mode}
            changeMode={changeMode}
            Ymode={Ymode}
            Rmode={Rmode}
            Gmode={Gmode}
          />
          <div className="container">
            {/* <Home/> */}
            <Routes>
              <Route exact path="/" element={<Home mode={mode} />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route
                exact
                path="/login"
                element={<Login mode={mode} />}
              ></Route>
              <Route
                exact
                path="/signup"
                element={<Signup mode={mode} />}
              ></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </Notestate>
    </>
  );
}

export default App;
