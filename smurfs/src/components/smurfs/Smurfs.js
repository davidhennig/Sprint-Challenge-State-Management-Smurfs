import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "../../actions";
import SmurfResults from "./SmurfResults";
import UserForm from "../../UserForm";

const Smurfs = props => {
  console.log(props);
  return (
    <div>
      {!props.data && !props.isFetching && <p>Go ahead! Fetch some Smurfs! </p>}
      {props.data && <SmurfResults />}
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.data && <p>{props.data.data}</p>}
      <button onClick={props.getData}>Fetch Smurfs!</button>
      <UserForm />
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

export default connect(mapStateToProps, { getData })(Smurfs);
