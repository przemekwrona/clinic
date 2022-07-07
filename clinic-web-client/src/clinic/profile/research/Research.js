import React, {Component} from "react";
import ResearchItem from "./ResearchItem";
import "./Research.scss";

class Research extends Component {

    constructor(props) {
        super(props);
        this.state = {projects: props.projects};
    }

    render() {
        return (
            <div className="container p-0">
                <div className="row mt-3">
                    <div className="col-md-12">
                        <h4>Research</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-primary" role="alert">
                            This is a primary alert—check it out!
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        {this.state.projects.map((project) => <ResearchItem project={project}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Research;
