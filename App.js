import React from "react";
import "./App.css";
import Home from "./pages/home";
import Header from "./components/header";
import { Link, BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path="/home" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
