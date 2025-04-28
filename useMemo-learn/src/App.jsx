import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num){
    console.log("Inside expensive task function");
    for(let i=0; i<= 1000000000; i++){}       // Delay occure due to this loop
    return num*2;
  }

  // const double = expensiveTask(input);

  // Solution by using useMemo()

  let double = useMemo(() => expensiveTask(input), [input]);   // memoizes only the last updated value

  return (
    <>
      <div className="card">
        <h2>UseMemo Application</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button><br/><br/>
        <input
        type='number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        
        />
        <h3>Double: {double}</h3>
        </div>
    </>
  )
}

export default App
