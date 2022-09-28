import React, {Component} from "react";
import "./Patient.scss";
import Ksadspl from "./k-sads-pl/K-sads-pl";
import ADHD_ICD_10 from "./adhd-icd-10/ADHD-ICD-10";

class Patient extends Component {

    render() {
        return (
            <div>
                {/*<Ksadspl></Ksadspl>*/}
                <ADHD_ICD_10></ADHD_ICD_10>
            </div>)
    }

}

export default Patient;