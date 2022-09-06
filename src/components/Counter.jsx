import React, { useState } from "react"

function Counter(props) {
  let [counter, setCount] = useState(0)

  const increment = (e) => {
    e.preventDefault()
    setCount(counter += 1)
  }

  const decriment = (e) => {
    e.preventDefault()
    setCount(counter -= 1)
  }

  return (
    <div>
      <h1>Counter {props.name}: {counter}</h1>
      <form>
        <button type="submit" onClick={increment}>Increment</button>
        <button type="submit" onClick={decriment}>Decrement</button>
      </form>
    </div>
  );
}

export default Counter;
