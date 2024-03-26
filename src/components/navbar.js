
import './navbar.css';
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((prevClicked) => !prevClicked);
    };

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo"><text>Wayfarer Holidays</text></h1>
            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            {Menuitems.map((item,index)=>{
                        return(
                             <li key={index}>
                       <Link className={item.cName} to={item.url}>
                       <i class={item.icon}></i>{item.title}
                       </Link>
                    </li>
                        )

                    })}
            </ul>
        </nav>
    );
};

export default Navbar;


