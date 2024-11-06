import {NavLink} from "react-router-dom";

export default function Navigation() {
    return (
        <div>
            <NavLink to="/home">Start</NavLink>&nbsp;&nbsp;
            <NavLink to="/characters">Character</NavLink>

        </div>
    );
}