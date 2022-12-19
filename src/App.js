import logo from './logo.svg';
import './App.css';
import Singlep from './Singlep';

import { Routes, Route } from "react-router-dom"
import Home from "./Home"


function App() {
  return (
    <div className="App">
         <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/:id" element={ <Singlep/> } />
      </Routes>
    </div>
  );
}

export default App;
