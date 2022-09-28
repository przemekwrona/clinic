import React, {useState} from "react";
import axios from 'axios';
import "./K-sads-pl.scss";

function KSadsPl(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const kSadsPl = {
            firstName: firstName,
            lastName: lastName,
            gender: gender
        }

        const surveyID = 1;

        axios.post(`/survey/k-sads-pl/${surveyID}`, kSadsPl)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <h5 className="mt-3">SUBJECT INFORMATION</h5>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name:</label>
                        <input type="text" className="form-control" name="firstName" value={firstName}
                               onChange={e => setFirstName(e.target.value)}/>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" name="lastName" value={lastName}
                               onChange={e => setLastName(e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="lastName" className="form-label">Gender:</label>
                    </div>

                    <div className="col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="male"
                                   value="MALE" onChange={e => setGender(e.target.value)}/>
                            <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="female"
                                   value="FEMALE" onChange={e => setGender(e.target.value)}/>
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="ethnicity" className="form-label">Ethnicity:</label>
                    </div>
                    <div className="col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="ethnicity" id="latino"/>
                            <label className="form-check-label" htmlFor="latino">Hispanic or Latino</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="ethnicity" id="non-latino"/>
                            <label className="form-check-label" htmlFor="non-latino">Not Hispanic or Latino</label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="race" className="form-label">Race (Mark all that apply):</label>
                    </div>
                    <div className="col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="race" id="black"/>
                            <label className="form-check-label" htmlFor="black">Black or African American</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="race" id="asian"/>
                            <label className="form-check-label" htmlFor="asian">Asian</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="race" id="white"/>
                            <label className="form-check-label" htmlFor="white">White or Caucasian</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="race" id="other"/>
                            <label className="form-check-label" htmlFor="other">Other</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="race" id="hawaiian"/>
                            <label className="form-check-label" htmlFor="hawaiian">Native Hawaiian or Pacific
                                Islander</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="race" id="american"/>
                            <label className="form-check-label" htmlFor="american">Native American or Alaskan
                                Native</label>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-md-12">
                        <label htmlFor="ethnicity" className="form-label">With whom is subject currently living
                            (choose one)?</label>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="biological-parents"/>
                            <label className="form-check-label" htmlFor="biological-parents">
                                Both biological parents
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="biological-parents-joint-custody"/>
                            <label className="form-check-label" htmlFor="biological-parents-joint-custody">
                                Both biological parents, but joint custody
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="biological-mather-stepfather"/>
                            <label className="form-check-label" htmlFor="biological-mather-stepfather">
                                Biological mather and stepfather
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="biological-father-stepmother"/>
                            <label className="form-check-label" htmlFor="biological-father-stepmother">
                                Biological father and stepmother
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="biological-mather-partner"/>
                            <label className="form-check-label" htmlFor="biological-mather-partner">
                                Biological mather and boyfriend/girlfriend
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="biological-father-partner"/>
                            <label className="form-check-label" htmlFor="biological-father-partner">
                                Biological father and boyfriend/girlfriend
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="biological-mother-only"/>
                            <label className="form-check-label" htmlFor="biological-mother-only">
                                Biological mother only
                            </label>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="biological-father-only"/>
                            <label className="form-check-label" htmlFor="biological-father-only">
                                Biological father only
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="stepmother-only"/>
                            <label className="form-check-label" htmlFor="stepmother-only">
                                Stepmother only
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="stepfather-only"/>
                            <label className="form-check-label" htmlFor="stepfather-only">
                                Stepfather only
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="grandparent"/>
                            <label className="form-check-label" htmlFor="grandparent">
                                Grandparent
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="adoptive-parent"/>
                            <label className="form-check-label" htmlFor="adoptive-parent">
                                Adoptive parent
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="other-friend"/>
                            <label className="form-check-label" htmlFor="other-friend">
                                Other relative/friend
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="foster-home"/>
                            <label className="form-check-label" htmlFor="foster-home">
                                Foster home
                            </label>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="group-home"/>
                            <label className="form-check-label" htmlFor="group-home">Group home</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="residential-institution"/>
                            <label className="form-check-label" htmlFor="residential-institution">
                                Residential institution
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="boarding-home"/>
                            <label className="form-check-label" htmlFor="boarding-home">
                                Boarding home
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="runaway"/>
                            <label className="form-check-label" htmlFor="runaway">
                                Runaway
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="college-student"/>
                            <label className="form-check-label" htmlFor="college-student">
                                College student
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="lives-independently"/>
                            <label className="form-check-label" htmlFor="lives-independently">
                                Lives independently
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="living-person"
                                   id="other"/>
                            <label className="form-check-label" htmlFor="other">
                                Other
                            </label>
                        </div>
                    </div>
                </div>


                <hr/>

                <div className="row">
                    <h5 className="mt-3">PARENTAL PARTICIPATION:</h5>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <label htmlFor="informant-person" className="form-label">
                            Who is the informant/reporter for this interview?
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="informant-person"
                                   id="biological-parents"/>
                            <label className="form-check-label" htmlFor="biological-parents">
                                Both biological parents
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="informant-person"
                                   id="biological-mother"/>
                            <label className="form-check-label" htmlFor="biological-mother">
                                Biological mother
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="informant-person"
                                   id="biological-father"/>
                            <label className="form-check-label" htmlFor="biological-father">
                                Biological mother
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="informant-person"
                                   id="both-adoptive-parents"/>
                            <label className="form-check-label" htmlFor="both-adoptive-parents">
                                Both adoptive parents
                            </label>
                        </div>


                    </div>
                    <div className="col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="informant-person"
                                   id="adoptive-mother"/>
                            <label className="form-check-label" htmlFor="adoptive-mother">
                                Adoptive mother
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="informant-person"
                                   id="adoptive-father"/>
                            <label className="form-check-label" htmlFor="adoptive-father">
                                Adoptive father
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="informant-person"
                                   id="step-mother"/>
                            <label className="form-check-label" htmlFor="step-mother">
                                Step-mother
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="informant-person"
                                   id="step-father"/>
                            <label className="form-check-label" htmlFor="step-father">
                                Step-father
                            </label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="informant-person"
                                   id="grandparent"/>
                            <label className="form-check-label" htmlFor="grandparent">
                                Grandparent
                            </label>
                        </div>

                        <div className="col-md-4">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="informant-person"
                                       id="other-relative"/>
                                <label className="form-check-label" htmlFor="other-relative">
                                    Other relative
                                </label>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="informant-person"
                                       id="other"/>
                                <label className="form-check-label" htmlFor="other">
                                    Other
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <h5 className="mt-3">SUBJECT'S PRIMARY CAREGIVER's</h5>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="primary-caregiver-first-name" className="form-label">
                            First Name:
                            <small className="text-muted">(lives with subject, if applicable)</small>
                        </label>
                        <input type="text" className="form-control" id="primary-caregiver-first-name"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="primary-caregiver-last-name" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" id="primary-caregiver-last-name"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <label htmlFor="primary-caregiver-relation" className="form-label">
                            This is subject's:
                        </label>
                    </div>
                    <div className="col-md-2">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="primary-caregiver-relation"
                                   id="primary-caregiver-relation-biological-mother"/>
                            <label className="form-check-label"
                                   htmlFor="primary-caregiver-relation-biological-mother">
                                Biological Mother
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="primary-caregiver-relation"
                                   id="primary-caregiver-relation-step-mother"/>
                            <label className="form-check-label" htmlFor="primary-caregiver-relation-step-mother">
                                Stepmother
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="primary-caregiver-relation"
                                   id="primary-caregiver-relation-adopted-mother"/>
                            <label className="form-check-label" htmlFor="primary-caregiver-relation-adopted-mother">
                                Adopted Mother
                            </label>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="primary-caregiver-relation"
                                   id="primary-caregiver-relation-biological-father"/>
                            <label className="form-check-label"
                                   htmlFor="primary-caregiver-relation-biological-father">
                                Biological Father
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="primary-caregiver-relation"
                                   id="primary-caregiver-relation-step-father"/>
                            <label className="form-check-label" htmlFor="primary-caregiver-relation-step-father">
                                Stepfather
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="primary-caregiver-relation"
                                   id="primary-caregiver-relation-adopted-father"/>
                            <label className="form-check-label" htmlFor="primary-caregiver-relation-adopted-father">
                                Adopted Father
                            </label>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="primary-caregiver-relation"
                                   id="primary-caregiver-relation-foster-mother"/>
                            <label className="form-check-label"
                                   htmlFor="primary-caregiver-relation-foster-mother">
                                Foster Mother
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="primary-caregiver-relation"
                                   id="primary-caregiver-relation-aunt"/>
                            <label className="form-check-label" htmlFor="primary-caregiver-relation-aunt">
                                Aunt
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="primary-caregiver-relation"
                                   id="primary-caregiver-relation-grandmother"/>
                            <label className="form-check-label" htmlFor="primary-caregiver-relation-grandmother">
                                Grandmother
                            </label>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="primary-caregiver-relation"
                                   id="primary-caregiver-relation-foster-father"/>
                            <label className="form-check-label"
                                   htmlFor="primary-caregiver-relation-foster-father">
                                Foster Father
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="primary-caregiver-relation"
                                   id="primary-caregiver-relation-uncle"/>
                            <label className="form-check-label" htmlFor="primary-caregiver-relation-uncle">
                                Uncle
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="primary-caregiver-relation"
                                   id="primary-caregiver-relation-grandfather"/>
                            <label className="form-check-label" htmlFor="primary-caregiver-relation-grandfather">
                                Grandfather
                            </label>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="primary-caregiver-relation"
                                   id="primary-caregiver-relation-none"/>
                            <label className="form-check-label"
                                   htmlFor="primary-caregiver-relation-none">
                                None
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="primary-caregiver-relation"
                                   id="primary-caregiver-relation-other"/>
                            <label className="form-check-label" htmlFor="primary-caregiver-relation-other">
                                Other
                            </label>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <h5 className="mt-3">SUBJECT'S SECONDARY CAREGIVER's</h5>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="secondary-caregiver-first-name" className="form-label">
                            First Name:
                            <small className="text-muted">(lives with subject, if applicable)</small>
                        </label>
                        <input type="text" className="form-control" id="secondary-caregiver-first-name"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="secondary-caregiver-last-name" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" id="secondary-caregiver-last-name"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <label htmlFor="secondary-caregiver-relation" className="form-label">
                            This is subject's:
                        </label>
                    </div>
                    <div className="col-md-2">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="secondary-caregiver-relation"
                                   id="secondary-caregiver-relation-biological-mother"/>
                            <label className="form-check-label"
                                   htmlFor="secondary-caregiver-relation-biological-mother">
                                Biological Mother
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="secondary-caregiver-relation"
                                   id="secondary-caregiver-relation-step-mother"/>
                            <label className="form-check-label" htmlFor="secondary-caregiver-relation-step-mother">
                                Stepmother
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="secondary-caregiver-relation"
                                   id="secondary-caregiver-relation-adopted-mother"/>
                            <label className="form-check-label"
                                   htmlFor="secondary-caregiver-relation-adopted-mother">
                                Adopted Mother
                            </label>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="secondary-caregiver-relation"
                                   id="secondary-caregiver-relation-biological-father"/>
                            <label className="form-check-label"
                                   htmlFor="secondary-caregiver-relation-biological-father">
                                Biological Father
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="secondary-caregiver-relation"
                                   id="secondary-caregiver-relation-step-father"/>
                            <label className="form-check-label" htmlFor="secondary-caregiver-relation-step-father">
                                Stepfather
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="secondary-caregiver-relation"
                                   id="secondary-caregiver-relation-adopted-father"/>
                            <label className="form-check-label"
                                   htmlFor="secondary-caregiver-relation-adopted-father">
                                Adopted Father
                            </label>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="secondary-caregiver-relation"
                                   id="secondary-caregiver-relation-foster-mother"/>
                            <label className="form-check-label"
                                   htmlFor="secondary-caregiver-relation-foster-mother">
                                Foster Mother
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="secondary-caregiver-relation"
                                   id="secondary-caregiver-relation-aunt"/>
                            <label className="form-check-label" htmlFor="secondary-caregiver-relation-aunt">
                                Aunt
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="secondary-caregiver-relation"
                                   id="secondary-caregiver-relation-grandmother"/>
                            <label className="form-check-label" htmlFor="secondary-caregiver-relation-grandmother">
                                Grandmother
                            </label>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="secondary-caregiver-relation"
                                   id="secondary-caregiver-relation-foster-father"/>
                            <label className="form-check-label"
                                   htmlFor="secondary-caregiver-relation-foster-father">
                                Foster Father
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="secondary-caregiver-relation"
                                   id="secondary-caregiver-relation-uncle"/>
                            <label className="form-check-label" htmlFor="secondary-caregiver-relation-uncle">
                                Uncle
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="secondary-caregiver-relation"
                                   id="secondary-caregiver-relation-grandfather"/>
                            <label className="form-check-label" htmlFor="secondary-caregiver-relation-grandfather">
                                Grandfather
                            </label>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="secondary-caregiver-relation"
                                   id="secondary-caregiver-relation-none"/>
                            <label className="form-check-label"
                                   htmlFor="secondary-caregiver-relation-none">
                                None
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="secondary-caregiver-relation"
                                   id="secondary-caregiver-relation-other"/>
                            <label className="form-check-label" htmlFor="secondary-caregiver-relation-other">
                                Other
                            </label>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <h5 className="mt-3">CHILD AND ADOLESCENT HEALTH SCREEN</h5>
                </div>

                <div className="row">
                    <h5 className="mt-3">PREGNANCY AND BIRTH:</h5>
                </div>

                <div className="row">
                    <div className="col-md-6">1. Mother's age at birth of child
                        <hr className="mb-0"/>
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-1">
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">2. Did mother have any illness injury during pregnancy?
                        <hr className="mb-0"/>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="illness-during-pregnancy"
                                   id="illness-during-pregnancy-yes"/>
                            <label className="form-check-label"
                                   htmlFor="illness-during-pregnancy-yes">
                                Yes
                            </label>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="illness-during-pregnancy"
                                   id="illness-during-pregnancy-no"/>
                            <label className="form-check-label" htmlFor="illness-during-pregnancy-no">
                                No
                            </label>
                        </div>
                    </div>

                    <div className="col-md-4"></div>
                </div>

                <div className="row">
                    <div className="col-md-6">3. Did she take any medications other than vitamins iron?
                        <hr className="mb-0"/>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="medications-during-pregnancy"
                                   id="medications-during-pregnancy-yes"/>
                            <label className="form-check-label"
                                   htmlFor="medications-during-pregnancy-yes">
                                Yes
                            </label>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="medications-during-pregnancy"
                                   id="medications-during-pregnancy-no"/>
                            <label className="form-check-label" htmlFor="medications-during-pregnancy-no">
                                No
                            </label>
                        </div>
                    </div>

                    <div className="col-md-4"></div>
                </div>

                <div className="row">
                    <div className="col-md-6">4. Did mother drink or use elicit drugs during pregnancy?
                        <hr className="mb-0"/>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="drink-or-drugs-during-pregnancy"
                                   id="drink-or-drugs-during-pregnancy-yes"/>
                            <label className="form-check-label"
                                   htmlFor="drink-or-drugs-during-pregnancy-yes">
                                Yes
                            </label>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="drink-or-drugs-during-pregnancy"
                                   id="drink-or-drugs-during-pregnancy-no"/>
                            <label className="form-check-label" htmlFor="drink-or-drugs-during-pregnancy-no">
                                No
                            </label>
                        </div>
                    </div>

                    <div className="col-md-4"></div>
                </div>

                <div className="row">
                    <div className="col-md-6">5. Did mother smoke during pregnancy?
                        <hr className="mb-0"/>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="smoke-during-pregnancy"
                                   id="smoke-during-pregnancy-yes"/>
                            <label className="form-check-label"
                                   htmlFor="smoke-during-pregnancy-yes">
                                Yes
                            </label>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="smoke-during-pregnancy"
                                   id="smoke-during-pregnancy-no"/>
                            <label className="form-check-label" htmlFor="smoke-during-pregnancy-no">
                                No
                            </label>
                        </div>
                    </div>

                    <div className="col-md-4"></div>
                </div>

                <div className="row">
                    <div className="col-md-6">6. Was the baby premature?
                        <hr className="mb-0"/>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="was-premature"
                                   id="premature-yes"/>
                            <label className="form-check-label"
                                   htmlFor="premature-yes">
                                Yes
                            </label>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="was-premature"
                                   id="premature-no"/>
                            <label className="form-check-label" htmlFor="premature-no">
                                No
                            </label>
                        </div>
                    </div>

                    <div className="col-md-4"></div>
                </div>

                <div className="row">
                    <div className="col-md-6">7. What was the birth weight?
                        <hr className="mb-0"/>
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-1">
                    </div>

                    <div className="col-md-4"></div>
                </div>

                <div className="row">
                    <div className="col-md-6">8. Did the baby have any trouble at birth?
                        <hr className="mb-0"/>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="trouble-at-birth"
                                   id="trouble-at-birth-yes"/>
                            <label className="form-check-label"
                                   htmlFor="trouble-at-birth-yes">
                                Yes
                            </label>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="trouble-at-birth"
                                   id="trouble-at-birth-no"/>
                            <label className="form-check-label" htmlFor="trouble-at-birth-no">
                                No
                            </label>
                        </div>
                    </div>

                    <div className="col-md-4"></div>
                </div>

                <div className="row">
                    <div className="col-md-6">9. Did the baby have any other trouble? (Jaundice, infections, other?)
                        <hr className="mb-0"/>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="other-trouble-at-birth"
                                   id="other-trouble-at-birth-yes"/>
                            <label className="form-check-label"
                                   htmlFor="other-trouble-at-birth-yes">
                                Yes
                            </label>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="other-trouble-at-birth"
                                   id="other-trouble-at-birth-no"/>
                            <label className="form-check-label" htmlFor="other-trouble-at-birth-no">
                                No
                            </label>
                        </div>
                    </div>

                    <div className="col-md-4"></div>
                </div>

                <div className="row">
                    <div className="col-md-6">10. How many days did the baby stay in the hospital after birth?
                    </div>
                    <div className="col-md-4"></div>
                </div>

                <hr/>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default KSadsPl;
