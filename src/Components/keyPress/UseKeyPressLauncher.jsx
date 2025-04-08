import React from 'react'
import useKeyPress from './useKeyPress'
function UseKeyPressLauncher() {
const pressed = useKeyPress("Enter")
  return (
  <p className='border border-stone-900 w-48 text-center border-r-4  rounded-2xl m-auto mt-10 font-bold border-b-4
  '>{pressed? "Button clickato":"In attesa del click "}</p>
  )
}

export default UseKeyPressLauncher
