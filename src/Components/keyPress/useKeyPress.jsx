import React, { useEffect, useState } from 'react';

function useKeyPress(key) {
const [pressedKey,setPressedKey]=useState(false)

useEffect(()=>{
 const handleClickdown =(e)=>{
 if(e.key===key){setPressedKey(true)  }}
 console.log(pressedKey)
 const handleClickup =(e)=>{
  if(e.key===key)setPressedKey(false)

 }
  console.log(pressedKey)
window.addEventListener("keydown",handleClickdown)
window.addEventListener("keyup",handleClickup)
return ()=>{
  window.removeEventListener("keydown", handleClickdown)
  window.removeEventListener("keyup", handleClickup)
}},[pressedKey])
     return pressedKey  
}


export default useKeyPress;
