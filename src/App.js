import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Movie from "./components/Movie";
import Tvprogram from "./components/Tvprogram";
import Book from "./components/Book";

const App = () => {
  return (
    <div>
      <Route path="/" component={Movie} exact={true} />
      <Route path="/tvprogram" component={Tvprogram} />
      <Route path="/book" component={Book} />
    </div>
  );
};

export default App;
