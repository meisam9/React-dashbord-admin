import React from 'react'
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="topbarwrapper">
        <div className="topLeft">
          <span className="logo">MeisamAdmin</span>
          </div>
        <div className="topRight">
          <div className="topbar-icons">
            <NotificationsNone/>
            <span className="top-icon-badge">2</span>
          </div>
          <div className="topbar-icons">
            <Language/>
          </div>
          <div className="topbar-icons">
            <Settings/>
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="avatar" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
