import React, {Component} from "react";
import Profile from "./profile/Profile";
import Patient from "./patient/Patient";
import {BrowserRouter as Router, Link, Routes, Route, Outlet} from "react-router-dom";

class Clinic extends Component {
    render() {
        return (

            <div>
                <header className="p-3 mb-3 border-bottom bg-primary">
                    <div className="container">
                        <div
                            className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/"
                               className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                                <i className="bi-alarm"></i>
                                <i className="bi-github" role="img" aria-label="GitHub"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-hospital" viewBox="0 0 16 16">
                                    <path
                                        d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z"/>
                                    <path
                                        d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z"/>
                                </svg>
                            </a>

                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li>
                                    <Link to="/profile/overview" className="nav-link px-2 link-light">
                                        Your profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile/patient" className="nav-link px-2 link-light">
                                        Your patients
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile/research" className="nav-link px-2 link-light">
                                        Your researchers
                                    </Link>
                                </li>
                            </ul>

                            <div className="dropdown text-end">
                                <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle"
                                   id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32"
                                         className="rounded-circle"/>
                                </a>
                                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                    <li>
                                        <Link to="/profile/overview" className="dropdown-item">Your profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/profile/patient" className="dropdown-item">Your patients</Link>
                                    </li>
                                    <li>
                                        <Link to="/profile/research" className="dropdown-item">Your researchers</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <Routes>
                        <Route path="/profile" element={<Profile/>}></Route>
                        <Route path="/patient" element={<Patient/>}></Route>
                        <Route path="/patient/:patientId/k-sads-pl/:ksadsplId" element={<Patient/>}></Route>
                        <Route path="/*" element={<Profile/>}></Route>
                    </Routes>
                </div>

                <footer className="bg-dark text-center text-white mt-3">
                    <div className="container p-4 pb-0">
                        <section className="mb-4">
                            <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i
                                className="fab fa-facebook-f"></i></a>

                            <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i
                                className="fab fa-twitter"></i></a>

                            <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i
                                className="fab fa-google"></i></a>

                            <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i
                                className="fab fa-instagram"></i></a>

                            <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i
                                className="fab fa-linkedin-in"></i></a>

                            <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i
                                className="fab fa-github"></i></a>
                        </section>
                    </div>

                    <div className="text-center p-3 bg-dark">
                        © 2022 Copyright:
                        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                    </div>
                </footer>
            </div>)
    }
}

export default Clinic;