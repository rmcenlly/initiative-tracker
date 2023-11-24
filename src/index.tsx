import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./pages/navigation"
import Home from "./pages/home";
import Monsters from "./pages/monsters"
import Stuff from "./pages/stuff";
import Tracker from "./pages/tracker";
import Players from "./pages/players";
import Encounters from "./pages/encounters";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/monsters" element={<Monsters />} />
      <Route path="/stuff" element={<Stuff />} />
      <Route path="/stuff/players" element={<Players />} />
      <Route path="/stuff/encounters" element={<Encounters />} />
      <Route path="/tracker" element={<Tracker />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
