import React from "react";

const BtnMore = (props) => {
  return (
    <>
      <button
        className={props.value < 10 ? "btn-1" : "hide"}
        onClick={() => {
          props.more(props.value + 1);
        }}
      >
        +
      </button>
    </>
  );
};

export default BtnMore;
