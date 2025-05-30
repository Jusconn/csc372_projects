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
            <button id="close" aria-label="Close navigation menu">X</button>
            <nav>
                <ul>
                    <li>
                        <h1>Ava Moniz</h1>
                    </li>
                    <li>
                        <NavLink id="/" className="NavLink" to="/" aria-label="Navigate to Information page">Information</NavLink>
                    </li>
                    <li>
                        <NavLink id="/films" className="NavLink" to="/films" aria-label="Navigate to Films page">Films</NavLink>
                    </li>
                    <li>
                        <a id="/messages" className="NavLink" href="https://jwchacon.rhody.dev/csc372_projects/ClientSite/avaSite/src/phpRoot/index.php" aria-label="Navigate to Messages page">Messages</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}