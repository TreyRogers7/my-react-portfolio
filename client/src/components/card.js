import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`http://placecorgi.com/${randomWidth()}`}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a href="https://github.com/emilyshurtz94/swab-swap" className="btn btn-success">
           Repo: {props.name}
          </a>
          <a href="https://swab-swap.herokuapp.com/" className="btn btn-primary">
           Deploy: {props.name}
          </a>
        </div>
      </div>
    </div>
    
  );
}

