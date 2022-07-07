import React, {Component} from "react";
import "./ResearchItem.scss";

class ResearchItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {project: props.project};
    }

    render() {
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{this.state.project.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">{this.state.project.description}</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        )
    }
}

export default ResearchItem;