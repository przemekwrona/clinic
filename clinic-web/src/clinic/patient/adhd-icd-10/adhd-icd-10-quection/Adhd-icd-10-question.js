import React from "react";
import { useTranslation } from 'react-i18next';

import './Adhd-icd-10-question.scss';

function AdhdIcd10Question(props) {

    const { t, i18n } = useTranslation();

    const id = props.id;
    const name = props.name;
    const index = props.index;
    const question = props.question;
    const translationKey = props.translationKey;

    const responses = [
        {points: 3, answer: "tak"},
        {points: 2, answer: "raczej tak"},
        {points: 1, answer: "raczej nie"},
        {points: 0, answer: "nie"}
    ];

    const handleAnswer = (e) => {
        props.onChange(e.target.value);
    }

    function getId(response) {
        return id + '-' + response.points;
    }

    function isGray(response) {
        return response.points === 3 || response.points === 2;
    }

    return [
        <div className="row">
            <div className="col-md-12">
                <label htmlFor="hearingDisorder" className="form-label">{index}. {t(translationKey)} </label>
            </div>
        </div>,
        <div className="row px-2 mt-1">
            {
                responses.map((r) => {
                    return (
                        <div className={`col-md-2 ${isGray(r) ? "bg-secondary" : ""}`}>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name={name}
                                       id={getId(r)} value={r.points} onChange={handleAnswer}/>
                                <label className="form-check-label"
                                       htmlFor={getId(r)}>{r.answer} ({r.points})</label>
                            </div>
                        </div>)
                })
            }
        </div>
    ]

}

export default AdhdIcd10Question;