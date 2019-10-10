import React, { useState } from 'react';

const App = () => {
  const useCount = (initialState = 0) => {
    const [count, setCount] = useState(+initialState);
    const actions = {
      increase: () => setCount(count + 1),
      decrease: () => setCount(count - 1),
      reset: () => setCount(0)
    };
    return [count, actions];
  };
  // true: 0, '0', '65', 65
  const [count, { increase, decrease, reset }] = useCount('15'); //TODO HERE
  // actions => increase => decrease => reset

  return (
    <>
      <h1>{`state is ${count}`}</h1>
      <button onClick={increase}> Increase </button>
      <button onClick={decrease}> Decrease </button>
      <button onClick={reset}> Reset </button>
    </>
  );
};

export default App;
