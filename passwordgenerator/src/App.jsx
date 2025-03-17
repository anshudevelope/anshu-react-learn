import { useCallback, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_=+[]{}~`"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      
      pass = str.charAt(char);
      
    }

    setPassword(pass);


  }, [length, numAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-15 text-orange-500 bg-gray-600 text-center'>Password Generator</div>
    </>
  )
}

export default App
