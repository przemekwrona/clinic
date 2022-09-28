import React from 'react';
import {useSelector} from 'react-redux';
import './App.css';
import Clinic from './clinic/Clinic'
import {BrowserRouter, Route, Routes, useHistory} from 'react-router-dom';
import Registration from "./registration/Registration";
import Login from "./login/Login";


function App(props) {

    const authToken = useSelector(state => state.auth.token);

    const isEmpty = () => authToken === '';

    if (isEmpty()) {
        // let history = useHistory();
        // history.push("/login");
        // useHistory().push('/login');
    }

    return (
        <div className="Clinic">
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/login" element={<Login/>}></Route>
                        <Route path="/register" element={<Registration/>}></Route>
                        <Route path="/*" element={<Clinic/>}></Route>
                    </Routes>
                </div>

            </BrowserRouter>
        </div>
    );
}

export default App;
