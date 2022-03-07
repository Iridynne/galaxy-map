import React from "react";
import "../assets/styles/Menu.css";

function toggleMenu() {
  document.getElementById("options").classList.toggle("closed");
}

export default function Menu() {
  return (
    <div className="menu-container">
      {/* Menu Toggle */}
      <div
        id="menu-toggle"
        className="menu-toggle menu-button"
        onClick={toggleMenu}
      >
        <div className="menu-icon" />
      </div>
      <ul id="options" className="menu-options closed">
        {/* Planet / Star Selection */}
        <li className="menu-button">
          <div className="planet-icon" />
        </li>
        {/* Camera Auto-rotate Toggle */}
        <li className="menu-button">
          <div className="rotate-icon" />
        </li>
      </ul>
    </div>
  );
}
