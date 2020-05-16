import React from "react";

const Spinner = (porps) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{porps.waitMessage}</div>
    </div>
  );
};

Spinner.defaultProps = {
  waitMessage: "Loading...",
};

export default Spinner;
