import React, { useState } from 'react'
import useMousePosition from './useMousePosition'


function UseMousePositionLancher() {
    const mousePos=useMousePosition
    ("🏃🏻‍♂️")
    return <p>{mousePos}</p>
 
}

export default UseMousePositionLancher
