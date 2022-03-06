import React from "react";
import "../assets/styles/Menu.css";
import menuIcon from "../assets/images/icon-menu.svg";

function toggleMenu() {
  document.getElementById("options").classList.toggle("closed");
}

export default function Menu() {
  return (
    <div className="menu-container">
      <div
        id="menu-toggle"
        className="menu-toggle menu-button"
        onClick={toggleMenu}
      >
        <div className="menu-icon" />
      </div>
      <ul id="options" className="menu-options closed">
        <li className="menu-button">
          <div className="rotate-icon" />
        </li>
        <li className="menu-button">
          <div className="planet-icon" />
        </li>
      </ul>
    </div>
  );
}
