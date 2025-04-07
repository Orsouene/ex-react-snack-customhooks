import React from 'react'
import useSwitch from './UseSwitch'
function UseSwitchLauncher() {
  const [isOn,toggle]=useSwitch()
  return (<> 
  <div className='bg-stone-100  w-60 p-10 rounded-xl m-auto mt-10 gap-1 flex border border-stone-950'>
      <p className='bg-stone-200 w-24 text-center p-5 rounded-3xl font-bold '>{isOn ? "ON" :"OFF"}  </p>
    <button onClick={toggle} className='bg-stone-900 text-stone-50 p-2 rounded-2xl border border-amber-100  cursor-pointer'>TOGGLE</button>
  </div>
   
  </>
   
  )
}

export default UseSwitchLauncher
