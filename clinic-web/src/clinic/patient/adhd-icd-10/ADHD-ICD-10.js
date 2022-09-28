import React, {useState} from "react";
import axios from 'axios';
import AdhdIcd10Question from './adhd-icd-10-quection/Adhd-icd-10-question';
import AdhdIcd10QuestionSummary from './adhd-icd-10-question-summary/Adhd-icd-10-question-summary';
import {useTranslation} from 'react-i18next';

import './ADHD-ICD-10.scss'

function ADHD_ICD_10() {

    const {t, i18n} = useTranslation();


    const [attentionDisorderInSchool, setAttentionDisorderInSchool] = useState("");
    const [attentionDisorderDuringPlay, setAttentionDisorderDuringPlay] = useState("");
    const [hearingDisorder, setHearingDisorder] = useState("");
    const [losingThings, setLosingThings] = useState("");
    const [externalStimuli, setExternalStimuli] = useState("");
    const [forgetful, setForgetful] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const adhdIcd10 = {
            attentionDisorderInSchool: attentionDisorderInSchool,
            attentionDisorderDuringPlay: attentionDisorderDuringPlay,
            hearingDisorder: hearingDisorder,
            losingThings: losingThings,
            externalStimuli: externalStimuli,
            forgetful: forgetful
        }

        const surveyID = 1;

        axios.post(`/survey/k-sads-pl/${surveyID}`, adhdIcd10)
            .then(res => {
            })
    }

    return (
        <div>
            <h3>{t('adhd-icd-10.title')}</h3>

            <p className="font-italic">* {t('adhd-icd-10.asterisk')}</p>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name:</label>
                        <input type="text" className="form-control" name="firstName"/>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" name="lastName"/>
                    </div>
                </div>

                <div className="row">
                    <h5 className="mt-3">ZABURZENIA UWAGI</h5>
                </div>

                <AdhdIcd10Question id="attention-disorder-in-school" name="attentionDisorderInSchool" index="1"
                                   onChange={setAttentionDisorderInSchool}
                                   translationKey="adhd-icd-10.attentionDisorderInSchool"/>


                <AdhdIcd10Question id="attention-disorder-during-play" name="attentionDisorderDuringPlay" index="2"
                                   onChange={setAttentionDisorderDuringPlay}
                                   translationKey="adhd-icd-10.attentionDisorderDuringPlay"/>


                <AdhdIcd10Question id="hearing-disorder" name="hearingDisorder" index="3"
                                   onChange={setHearingDisorder}
                                   translationKey="adhd-icd-10.hearingDisorder"/>

                <AdhdIcd10Question id="losingThings" name="losingThings" index="7"
                                   onChange={setLosingThings} translationKey="adhd-icd-10.losingThings"/>

                <AdhdIcd10Question id="external-stimuli" name="externalStimuli" index="8"
                                   onChange={setExternalStimuli} translationKey="adhd-icd-10.externalStimuli"/>

                <AdhdIcd10Question id="forgetful" name="forgetful" index="9"
                                   onChange={setForgetful} translationKey="adhd-icd-10.forgetful"/>


                <div className="row">
                    <div className="col-12">
                        <AdhdIcd10QuestionSummary></AdhdIcd10QuestionSummary>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <h5 className="mt-3">NADRUCHLIWOŚ</h5>
                </div>

                <AdhdIcd10Question id="forgetful" name="forgetful" index="1"
                                   onChange={setForgetful} translationKey="adhd-icd-10.question-10"/>

                <AdhdIcd10Question id="forgetful" name="forgetful" index="2"
                                   onChange={setForgetful} translationKey="adhd-icd-10.question-11"/>

                <AdhdIcd10Question id="forgetful" name="forgetful" index="3"
                                   onChange={setForgetful} translationKey="adhd-icd-10.question-12"/>

                <AdhdIcd10Question id="forgetful" name="forgetful" index="4"
                                   onChange={setForgetful} translationKey="adhd-icd-10.question-13"/>

                <AdhdIcd10Question id="forgetful" name="forgetful" index="5"
                                   onChange={setForgetful} translationKey="adhd-icd-10.question-14"/>

                <hr/>

                <div className="row">
                    <h5 className="mt-3">IMPULSYWNOŚĆ</h5>
                </div>

                <AdhdIcd10Question id="question-15" name="question-15" index="6"
                                   onChange={setForgetful} translationKey="adhd-icd-10.question-15"/>

                <AdhdIcd10Question id="question-16" name="question-16" index="7"
                                   onChange={setForgetful} translationKey="adhd-icd-10.question-16"/>

                <AdhdIcd10Question id="question-17" name="question-17" index="8"
                                   onChange={setForgetful} translationKey="adhd-icd-10.question-17"/>

                <AdhdIcd10Question id="question-18" name="question-18" index="9"
                                   onChange={setForgetful} translationKey="adhd-icd-10.question-18"/>

                <AdhdIcd10Question id="question-19" name="question-19" index="9"
                                   onChange={setForgetful} translationKey="adhd-icd-10.question-19"/>

                <AdhdIcd10Question id="question-20" name="question-20" index="B"
                                   onChange={setForgetful} translationKey="adhd-icd-10.question-20"/>

                <AdhdIcd10Question id="question-21" name="question-21" index="C"
                                   onChange={setForgetful} translationKey="adhd-icd-10.question-21"/>

                <AdhdIcd10Question id="question-22" name="question-22" index="D"
                                   onChange={setForgetful} translationKey="adhd-icd-10.question-22"/>

                <AdhdIcd10Question id="question-23" name="question-23" index="E"
                                   onChange={setForgetful} translationKey="adhd-icd-10.question-23"/>

                <div className="row">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
    )

}

export default ADHD_ICD_10;