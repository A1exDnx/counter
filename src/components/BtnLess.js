import React from "react";

const BtnLess = (props) => {
  return (
    <>
      <button
        className={props.value >= 1 ? "btn-1" : "hide"}
        onClick={() => {
          props.less(props.value - 1);
        }}
      >
        -
      </button>
    </>
  );
};

export default BtnLess;
