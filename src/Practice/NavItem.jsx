import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NavItem({item, marginLeft}) {
    const [showChildren, setShowChildren] = useState(false);
    const navigate = useNavigate();
  function handleDivClick(){
    navigate(item.path)
  }
  return (
<div  className={`ml-${marginLeft}`} onClick={handleDivClick} >

    <span>{item.label} </span>
    <button onClick={()=> setShowChildren(prev=> !prev)}>
        {showChildren? '⬆️': '⬇️'}
    </button>
    {setShowChildren && 
        item.children.map(childItem=> {
        <NavItem item={childItem} marginLeft={marginLeft+4}>

        </NavItem>})}
    </div>
  )
}

export default NavItem