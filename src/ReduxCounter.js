import React from "react";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import { decrementAction, incrementAction } from "./redux/actions";

const ReduxCounter = (props) => {
  const { value, incrementAction, decrementAction } = props;
  return (
    <>
      <h1>REDUX COUNTER</h1>
      <button onClick={decrementAction}>-</button>
      <span>{value}</span>
      <button onClick={incrementAction}>+</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(incrementAction()),
  decrementAction: () => dispatch(decrementAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
