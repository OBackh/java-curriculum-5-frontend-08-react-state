import {useNavigate} from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    function gotoCharcters() {
        navigate("/characters");
    }

    function gotoCreateNewCharacter() {
        navigate("/create-new-character");
    }

    return (
        <div>
            <h1>Homepage</h1>
            <p>Welcome to my new Website!</p>
            <button onClick={gotoCharcters}>Gehe zu der Character-Liste</button>
            <button onClick={gotoCreateNewCharacter}>Erstelle neue Charactere</button>
        </div>
    );
}