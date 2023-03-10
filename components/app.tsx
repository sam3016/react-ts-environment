import React from "react";

type Props = {
  props: {
    data: string,
  }
};

function App(props:Props) {
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
