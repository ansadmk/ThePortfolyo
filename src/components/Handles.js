import React from 'react'
import { useSelector } from 'react-redux'
import { social } from '../../Redux/selectors'
const Handles = () => {
  const socials=useSelector(social)
  if (socials.length>0) {
    
    return (
     <div style={{listStyle:"none"}} className="form">
      {socials.filter((item)=>item.enabled==true).map((items)=>(
      <a className="button-log" href={items.url} >
        <img src={items.image.url}/>
      </a>))}
     </div>
  
    )
  }
  return null
}

export default Handles