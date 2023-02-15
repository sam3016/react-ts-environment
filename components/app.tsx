import React from "react";

function App(props:any) {
  const data = props.props.data;

  const handleOnClick = () => {
    window.FileMaker.PerformScriptWithOption("Show Result", "You click a button", 5);
  };

  return (
    <>
      <div>{data}</div>
      <button onClick={handleOnClick}>Click</button>
    </>
  );
};

export default App;
