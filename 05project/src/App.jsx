import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)

  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    numberAllowed ? str += "0123456789" : ""
    charAllowed ? str += "!@#$%^&*()_+{}[]:;<>,.?/|~" : ""

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [
    length,
    numberAllowed,
    charAllowed,
    setPassword
  ])

  const copyToClipBoard = useCallback(() => {
    passwordRef.current.select() 
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-full px-4 py-3 my-8 bg-gray-900 text-white'>
        <div className="flex">
          <input ref={passwordRef} type="text" value={password} className='outline-none w-full py-1 px-3 bg-gray-900' placeholder='password' readOnly />
          <button onClick={copyToClipBoard} className='bg-orange-500 h-full px-4 py-2 rounded-full'>copy</button>
        </div>
      </div>
      <div className='w-full max-w-md mx-auto rounded-full px-10 py-3 my-8 bg-gray-900 text-white'>
        <div className="flex">
          <input type="range" min={6} max={25} value={length} onChange={(e) => {
            setLength(e.target.value)
          }} className=' cursor-pointer outline-none bg-gray-900 mx-4 ' placeholder='password' readOnly />
          <label className='font-semibold'>Length: {length}</label>
        </div>
        <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' value={length} onChange={(e) => {
          setnumberAllowed((prev) => !prev)
        }} className=' cursor-pointer outline-none bg-gray-900 p-2 mx-4' placeholder='password' readOnly />
        <label className='font-semibold'>Number</label>
        <input type="checkbox" defaultChecked={charAllowed} id='numberInput' value={length} onChange={(e) => {
          setcharAllowed((prev) => !prev)
        }} className=' cursor-pointer outline-none bg-gray-900 p-2 mx-4' placeholder='password' readOnly />
        <label className='font-semibold'>Character</label>
      </div>
    </>
  )
}

export default App
