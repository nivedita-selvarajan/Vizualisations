import { useState } from "react"
import React from "react";

export default function Sidebar({handleChange})  {
  const [open, setOpen] = useState(true)
  const [activeMenu, setActiveMenu] = useState('rawTable')
  let menuItems = [
    {
      title: "Raw Table",
      type: "rawTable"
    },
    {
      title: "Age vs Fare",
      type: "ageVsFare"
    },
    {
      title: "Survivals vs Class",
      type: "survivalsVsClass"
    }
  ]
  return (
      <div className={open ? "sidebar open" : "sidebar"}>
        <div className="sidebar-title" onClick={() => setOpen(!open)}>
          <span>
            Visualizations
          </span>
          <i className="bi-chevron-down toggle-btn"></i>
        </div>
        <div className="sidebar-content">
          { menuItems.map((item, index)  => 
            <div 
              className={activeMenu === item.type ? 'sidebar-item active' : 'sidebar-item'}
              key={index}
              onClick={() => {
                setActiveMenu(item.type);
                handleChange(item);
              }}>
              { item.title }
            </div>)
          }
        </div>
      </div>
  )
}