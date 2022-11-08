import React from "react";

function App(props:any) {
  const data = props.props.data;
  return (
    <div>{data}</div>
  );
};

export default App;
