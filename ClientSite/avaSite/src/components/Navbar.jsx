import React, {useEffect} from "react";
import { NavLink, useLocation } from "react-router";
import $ from "jquery";

export default function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;
    useEffect(() => {
    }, []);

    return (
        <div className="navbar">
        <button id="close">X</button>
        <nav>
            <ul>
                <li>
                    <NavLink id="/home" className="NavLink" to="/home">Ava Moniz</NavLink>
                </li>
                <li>
                    <NavLink id="/" className="NavLink" to="/">Information</NavLink>
                </li>
                <li>
                    <NavLink id="/films" className="NavLink" to="/films">Films</NavLink>
                </li>
                <li>
                    <NavLink id="/messages" className="NavLink" to="/messages">Messages</NavLink>
                </li>
            </ul>
        </nav>
    </div>
    )
}