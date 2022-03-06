import React from "react";
import "../assets/styles/Menu.css";
import menuIcon from "../assets/images/icon-menu.svg";

function toggleMenu() {
  document.getElementById("menu-options").classList.toggle("closed");
}

export default function Menu() {
  return (
    <div id="menu-container">
      <div id="menu-toggle" className="menu-button" onClick={toggleMenu}>
        <img src={menuIcon} className="icon" />
      </div>
      <div id="menu-options" className="closed">
        <div id="auto-rotate" className="menu-button" />
      </div>
    </div>
  );
}
