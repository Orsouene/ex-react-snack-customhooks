import React, { useEffect } from 'react'
import { useState } from 'react'
function useData() {
    const [currDate,setCurrDate]=useState()
  

 

    // const h=d.getSeconds()
const handleDate=()=>{

    const intervall = setInterval(() => { setCurrDate(new Date().toLocaleString()) }, 1000)

 return ()=>{
    clearInterval(intervall)
 } 
}
    useEffect(() => { handleDate ()},[currDate])

    return  currDate

  


}

export default useData
