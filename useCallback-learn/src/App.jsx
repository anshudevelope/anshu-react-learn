import { useCallback, useState } from 'react'
import './App.css'
import ChildComponents from './Components/Childcomponents';
import Expensivecalc from './Components/Expensivecalc';

function App() {
  // const [count, setCount] = useState(0);

  // const handleClick = useCallback(() => {
  //     setCount(count+1);
  //   }, [count]);

  return (
    <>

    <div>
      <Expensivecalc />
    </div>




      {/* <h1>useCallback Application</h1>
      <div className="card">
        <h2> count is {count}</h2>
        <button onClick={handleClick}>
          Increase
        </button>
        <br />
        <br />

        {/* unneccesry re-render this child component after each time count event */}
        {/* <ChildComponents 
        buttonName = "Click Me"
        handleClick={handleClick}  />
        </div> */} 
    </>
  )
}

export default App


// using React.memo to solve this problem
// React.memo - if you are dealing with values only
// useCallback - if you are dealing with functions too