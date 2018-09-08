import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="mt-3">
            <Home />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
