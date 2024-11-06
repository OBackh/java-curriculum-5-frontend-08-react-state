import {useNavigate} from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    function gotoCharcters() {
        navigate("/characters");
    }

    return (
        <div>
            <h1>Homepage</h1>
            <p>Welcome to my new Website!</p>
            <button onClick={gotoCharcters}>Gehe zu den Charcteren!</button>
        </div>
    );
}