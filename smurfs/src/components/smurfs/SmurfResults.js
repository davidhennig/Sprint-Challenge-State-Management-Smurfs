import React from "react";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";

const SmurfResults = props => {
  return (
    <div>
      {props.data.map(element => {
        console.log(element);
        return (
          <SmurfCard
            key={element.id}
            name={element.name}
            age={element.age}
            height={element.height}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(SmurfResults);
