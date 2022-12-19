import React from 'react'

import "../../assets/styles/Menu.css";

const Menu = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="menu-container">
        {/* Menu Toggle */}
        <div
            id="menu-toggle"
            className="menu-toggle menu-button"
            onClick={() => setOpen(!open)}
        >
            <div className="menu-icon" />
        </div>
        <ul id="options" className={`
            menu-options
            ${open ? '' : 'closed'}
        `}>
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
};

export default Menu;