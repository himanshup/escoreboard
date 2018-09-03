import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MatchesNav from "../MatchesNav/MatchesNav";
import NavBar from "../NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="container mt-3">
            <MatchesNav />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
