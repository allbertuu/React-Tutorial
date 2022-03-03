import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Welcome from "./pages/Welcome";
import React, { useState } from "react";

const App = () => {

    const [name, setName] = useState('');

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home setName={setName} name={name} />} />
                <Route path='/welcome' element={<Welcome name={name}/>} />
            </Routes>
        </Router>
    )
}

export default App