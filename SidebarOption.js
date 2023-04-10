import React from 'react';
import './SidebarOption.css'

function SidebarOption({title, Icon, number, selected}) {
  return (
    <div className={`sidebaroption ${selected  && 'sidebaroption-active'}`}>
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOption