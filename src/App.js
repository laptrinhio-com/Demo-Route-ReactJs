import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Sidebar from './components/Sidebar';
import DieuHuong from './components/DieuHuong';


function App() {
  return (
    <Router>
      <div className="d-flex" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <DieuHuong />
        </div>
      </div>
    </Router>
  );
}

export default App;
