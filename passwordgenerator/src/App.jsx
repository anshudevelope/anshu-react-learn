import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_=+[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char);

    }

    setPassword(pass);


  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select();
    // to copy any specific range(length) of password only 
    passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(()=> {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 text-center'>
        <h1 className='text-white text-center my-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden'>
          <input
            type='text'
            value={password}
            className='outline-none w-full px-3 py-1 bg-white text-black mb-4'
            placeholder='password'
            readOnly
            ref={passwordRef} />
          <button
          onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-800 text-white px-3 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 pb-4'>
          <div className="flex item-center gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Lable: {length}</label>
          </div>

          <div className="flex item-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={() => { setNumAllowed((prev) => !prev) }}
          />
          <label>Numbers</label>
        </div>

        <div className="flex item-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id='numberInput'
            onChange={() => { setCharAllowed((prev) => !prev) }}
          />
          <label>Characters</label>
        </div>
        </div>

       
      </div>
    </>
  )
}

export default App
