import React from "react";

import './Adhd-icd-10-question-summary.scss';

function AdhdIcd10QuestionSummary(props) {

    return (
        <div className="row">
            <div className="col-sm-3 bg-secondary">Liczba objawów</div>
            <div className="col-sm-3 border">1</div>
            <div className="col-sm-3 bg-secondary">Liczba punktów objawowych</div>
            <div className="col-sm-3 border">2</div>
        </div>
    );

}

export default AdhdIcd10QuestionSummary;