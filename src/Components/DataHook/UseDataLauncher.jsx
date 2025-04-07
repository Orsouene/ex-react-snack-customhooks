import React from 'react'
import useData from './useData'

function UseDataLauncher() {
const currDate=useData()
  return (
    <div className='bg-lime-50 w-72 mt-10 rounded-2xl border border-stone-950 p-2 m-auto text-center'> 
      
          <p> the time is :{currDate} </p>

    </div>
  )
}

export default UseDataLauncher
