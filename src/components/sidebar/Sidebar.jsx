import React from 'react'
import './Slidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.addicon} alt="" />
          <p>Add items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <img src={assets.bookingicon} alt="" />
          <p>List items</p>
        </NavLink>
        <NavLink to='/bookings' className="sidebar-option">
          <img  src={assets.lastbooked} alt="" />
          <p>Bookings</p>
        </NavLink>




      </div>



    </div>

  )
}

export default Sidebar
