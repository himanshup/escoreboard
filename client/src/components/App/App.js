import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MatchesNav from "../MatchesNav/MatchesNav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MatchesNav />
      </BrowserRouter>
    );
  }
}

export default App;
