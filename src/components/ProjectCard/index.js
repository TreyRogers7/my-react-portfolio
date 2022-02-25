import React from "react"
import "./style.css"


function ProjectCard(props){
    return(
        <>
        <div className="card col-md-3 col-12 xl-2 col sm-4 mb-2 d-flex card-style clearback" style={{width: "18rem", color: "black"}}>
            <img src={props.image} className="card-img-top card-restrict" alt={props.name} />
            <div className="card-bodyn text-left">
                <h5 className="card-title ml-auto p-2">{props.name}</h5>
                <p className="card-text p2">{props.description}</p>
                <button onClick={props.handleBtnClick} id={props.name} className="btn btn-secondary p-2">Learn More</button>
            </div>
        </div>
        </>

    )
}

export default ProjectCard