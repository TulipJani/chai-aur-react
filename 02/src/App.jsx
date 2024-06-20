import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const add = () => {
    counter != 20 ? setCounter(counter + 1) : "";
  };

  const remove = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(0);
  };

  return (
    <>
      <h1>Welcome to React</h1>
      <h3>counter value is {counter}</h3>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
    </>
  );
}

export default App;
