import React from "react";
// import "./sidebar.scss"; // Add your CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h4>
  <span id = 'sideBarGuardian' style={{ color: 'green' }}>GUARD</span>IAN
</h4>

      </div>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <a href="#home">Home</a> 
        </li>
        <li className="sidebar-item">
          <a href="#services">Services</a>
        </li>
        <li className="sidebar-item">
          <a href="#about">About</a>
        </li>
        <li className="sidebar-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
