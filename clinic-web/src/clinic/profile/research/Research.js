import React, {useState, useEffect} from "react";
import ResearchItem from "./ResearchItem";
import "./Research.scss";

function Research(props) {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        if (props.projects != null) {
            setProjects(props.projects)
        }
    }, [])

    function getResearchKey(research) {
        return "research-" + research.id + "-key";
    }

    return (
        <div className="container p-0">
            <div className="row mt-3">
                <div className="col-md-12">
                    <h4>Research</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    {
                        projects.length === 0 &&
                        <div className="alert alert-primary" role="alert">
                            This is a primary alert—check it out!
                        </div>
                    }
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    {projects.map((project) => <ResearchItem key={getResearchKey(project)} project={project}/>)}
                </div>
            </div>
        </div>
    )
}

export default Research;
