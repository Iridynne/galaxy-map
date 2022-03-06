import React from "react";
import "../assets/styles/Menu.css";

function toggleMenu() {
  document.getElementById("options").classList.toggle("closed");
}

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-toggle menu-button" onClick={toggleMenu}></div>
      <ul id="options" className="menu-options closed">
        <li className="auto-rotate menu-button" />
        <li className="menu-button" />
      </ul>
    </div>
  );
}
