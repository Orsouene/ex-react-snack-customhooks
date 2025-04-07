import React, { useEffect, useState } from 'react'

function useMousePosition(component) {
const [position,setPostion]=useState({x:0,y:0})
const handlePosition=(e)=>{
    setPostion({x:e.clientX,y:e.clientY})
    // console.log(position)

}
useEffect(()=>{
    document.addEventListener("mousemove",handlePosition)
    return () => document.removeEventListener("mousemove", handlePosition)
},[])
return (
    <span style={{position:'fixed',top:position.y,left:position.x,cursor:"none" , transform:"translate(-50%,-50%)"}}>{component}</span>
)
}

export default useMousePosition
