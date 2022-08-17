import { useState } from "react"
import React from "react";

export default function Sidebar({handleChange})  {
  const [open, setOpen] = useState(false)
  let menuItems = [
    {
      title: "Raw Table",
      item: "rawTable"
    },
    {
      title: "Age vs Fare",
      item: "ageVsFare"
    },
    {
      title: "Survivals vs Class",
      item: "survivalsVsClass"
    }
  ]
  return (
    <div className="sidebar">
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title" onClick={() => setOpen(!open)}>
          <span>
            Visualizations
          </span>
          <i className="bi-chevron-down toggle-btn"></i>
        </div>
        <div className="sidebar-content">
          { menuItems.map((item, index)  => <div key={index} onClick={() => handleChange(item.item)}>{ item.title }</div>) }
        </div>
      </div>
    </div>
  )
}