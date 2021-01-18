import React from "react";

const BtnReset = (props) => {
  return (
    <>
      <button
        className="reset"
        onClick={() => {
          props.reset(0);
        }}
      >
        Reset
      </button>
    </>
  );
};

export default BtnReset;
