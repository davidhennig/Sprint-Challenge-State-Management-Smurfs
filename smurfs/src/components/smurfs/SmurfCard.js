import React from "react";

const SmurfCards = props => {
  return (
    <div>
      <h2>New Smurf</h2>
      <div className="card">
        <h3>Name: {props.name}</h3>
        <h3>Age: {props.age}</h3>
        <h4>Height: {props.height}</h4>
      </div>
    </div>
  );
};

export default SmurfCards;
