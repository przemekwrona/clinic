import React, {Component} from "react";
import "./Patient.scss";
import axios from "axios";
import {Link, Routes, Route} from "react-router-dom";


class Patient extends Component {

    constructor(props) {
        super(props);
        this.state = {patients: {patients: []}}
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/patients`).then(res => {
            this.setState({patients: res.data});
        })
    }

    render() {
        return (
            <div className="container p-0">
                <div className="row mt-3">
                    <div className="col-md-12">
                        <h4>Patients</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="accordion accordion-flush" id="accordionFlush">
                            {
                                this.state.patients?.patients.map(function (patient, i) {
                                    function getAccordionId(patient) {
                                        return "flush-heading-" + patient.id;
                                    }

                                    function getCollapseId(patient) {
                                        return "flush-collapse-" + patient.id;
                                    }

                                    function getCollapseHashId(patient) {
                                        return "#flush-collapse-" + patient.id;
                                    }

                                    return <div className="accordion-item">
                                        <h2 className="accordion-header" id={getAccordionId(patient)}>
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={getCollapseHashId(patient)} aria-expanded="false"
                                                    aria-controls={getCollapseId(patient)}>
                                                <span className="fw-bold">{patient.code} &nbsp;</span>
                                                <span className="badge bg-info">{patient.ksadspl.length}</span>

                                                <span> &nbsp; {patient.name} {patient.surname}</span>
                                            </button>
                                        </h2>
                                        <div id={getCollapseId(patient)} className="accordion-collapse collapse"
                                             aria-labelledby={getAccordionId(patient)} data-bs-parent="#accordionFlush">
                                            <div className="accordion-body">
                                                <div className="list-group">
                                                    {
                                                        patient.ksadspl.length === 0 &&
                                                        <div className="alert alert-info mb-0" role="alert">Patient <span className="fw-bold">{patient.code}</span> does not have K-SADS-PL surveys.</div>
                                                    }

                                                    {
                                                        patient.ksadspl.map(function (ksads, i) {
                                                            return <Link
                                                                to={"/patient/" + patient.id + "/k-sads-pl/" + ksads.id}
                                                                className="list-group-item list-group-item-action flex-column align-items-start">

                                                                <div className="d-flex w-100 justify-content-between">
                                                                    <h5 className="mb-1">{ksads.name}</h5>
                                                                    <small>{ksads.date}</small>
                                                                </div>
                                                                <p className="mb-1">Donec id elit non mi porta gravida
                                                                    at eget
                                                                    metus.
                                                                    Maecenas sed diam eget risus varius blandit.</p>
                                                                <small>Donec id elit non mi porta.</small>
                                                            </Link>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Patient;

