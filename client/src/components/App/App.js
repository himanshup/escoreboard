import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import RegionRoutes from "../RegionRoutes/RegionRoutes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <RegionRoutes />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
