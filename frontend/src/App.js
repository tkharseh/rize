import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Summarize from "./Components/Summarize";

import './App.css'

function App() {
    return (
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/summarize' element={<Summarize/>} />
        </Routes>
      </Router>
    )
}

export default App;
