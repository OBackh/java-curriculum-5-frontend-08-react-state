import {NavLink} from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navbar">
            <NavLink to="/home" className="navPoint">Start</NavLink>
            <NavLink to="/characters" className="navPoint">Character-List</NavLink>
            <NavLink to="/create-new-character" className="navPoint">Create Char</NavLink>
        </div>
    );
}