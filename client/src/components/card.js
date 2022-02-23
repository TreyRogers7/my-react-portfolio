import React from 'react';

export default function Card(props) {
  return (
    // <div className="m-2">
      <div className="card">
        <img
          className="card-img-top"
          src={props.picture}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.repo} className="btn btn-success">
           Repo: {props.name}
          </a>
          <a href={props.deployed}className="btn btn-primary">
           Deploy: {props.name}
          </a>
        </div>
      </div>
    // </div>
    
  );
}

