import React, {useState, useEffect} from "react";
import axios from "axios";
import Overview from "./overview/Overview";
import Research from "./research/Research";
import Patient from "./patient/Patient"
import {Link, Routes, Route} from "react-router-dom";

function Profile() {
    const [editable, setEditable] = useState(false)
    const [profile, setProfile] = useState({})
    const [tab, setTab] = useState('OVERVIEW')

    async function getProfile() {
        return axios.get(`http://localhost:4000/profile`);
    }

    useEffect(() => {
        getProfile().then(res => setProfile(res.data));
    }, [])

    function edit() {
        setEditable(true)
    }

    function cancel() {
        setEditable(false)
    }

    function save() {
        setEditable(false)
    }

    function checkTab(checkedTab) {
        return tab === checkedTab;
    }

    function setOverview() {
        setTab('OVERVIEW')
    }

    function setPatients() {
        setTab('PATIENTS')
    }

    function setResearch() {
        setTab('RESEARCH')
    }

    return (<div className="mt-5">
        <div className="row">
            <div className="col-md-3">
                {editable}

                <img src="/avatar-0f4995dc21b4884fc33d936585e719b0.jpg"
                     className="rounded-circle d-block m-auto img-fluid" alt="Cinque Terre"/>

                <form className="mt-3">
                    <div>
                        <label htmlFor="name" className="form-label">Imię:&nbsp;</label>

                        {!editable &&
                            <label className="form-label">{profile.name}</label>}

                        {editable && <input type="text" className="form-control mb-3" id="name"
                                            value={profile.name}/>}
                    </div>
                    <div>
                        <label htmlFor="surname" className="form-label">Nazwisko:&nbsp;</label>
                        {!editable && <label className="form-label">{profile.surname}</label>}
                        {editable &&
                            <input type="text" className="form-control mb-3" id="surname" value={profile.surname}/>}
                    </div>
                    <div>
                        <label htmlFor="pwz-number" className="form-label">Numer PWZ:&nbsp;</label>
                        {!editable && <label className="form-label">{profile.pwz}</label>}
                        {editable &&
                            <input type="text" className="form-control mb-3" id="pwz-number" value={profile.pwz}
                                   disabled={true}/>}
                    </div>
                    <div className="float-end">
                        {editable && <button className="btn btn-outline-dark me-2" onClick={cancel}>Cancel</button>}
                        {editable && <button className="btn btn-primary" onClick={save}>Save</button>}
                        {!editable && <button className="btn btn-primary" onClick={edit}>Edit</button>}
                    </div>
                </form>

            </div>
            <div className="col-md-9">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className={checkTab('OVERVIEW') ? 'nav-link active' : 'nav-link'}
                           onClick={setOverview}>
                            <Link to="/profile/overview">Overview</Link>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={checkTab('PATIENTS') ? 'nav-link active' : 'nav-link'}
                           onClick={setPatients}>
                            <Link to="/profile/patient">Patients</Link>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={checkTab('RESEARCH') ? 'nav-link active' : 'nav-link'}
                           onClick={setResearch}>
                            <Link to="/profile/research">Research</Link>
                        </a>
                    </li>
                </ul>

                <Routes>
                    <Route path="/profile/overview" element={<Overview/>}></Route>
                    <Route path="/profile/research"
                           element={<Research projects={profile.projects}/>}></Route>
                    <Route path="/profile/patient"
                           element={<Patient/>}></Route>
                </Routes>
            </div>
        </div>
    </div>)
}

export default Profile