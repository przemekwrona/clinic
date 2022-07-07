import React from "react";
import logo from './logo.svg';
import './App.css';
import Clinic from './clinic/Clinic'
import {BrowserRouter} from "react-router-dom";



function App() {
    return (
        <div className="Clinic">
            <BrowserRouter>
                <Clinic></Clinic>
            </BrowserRouter>
        </div>
    );
}

export default App;
