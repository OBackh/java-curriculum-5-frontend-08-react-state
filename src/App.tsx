import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import SearchCharacters from "./components/SearchCharacters.tsx";
import Navigation from "./components/Navigation.tsx";
import CreateNewCharacter from "./components/CreateNewCharacter.tsx";
import {useState} from "react";
import {characters as existingCharacters} from "./Characters";

type Character = {
    name: string,
    species: string,
    status: string
}

export default function App() {

    const [characters, setCharacters] = useState<Character[]>(existingCharacters);

    const addCharacter = (newCharacter: Character) => {
        setCharacters((prevCharacters) => [...prevCharacters, newCharacter]);
    };

    return (
        <>
            <Navigation/>
            <Routes>

                <Route path="/home" element={<Home/>}/>
                <Route path="/characters" element={<SearchCharacters characters={characters}/>}/>
                <Route path="/create-new-character"
                       element={<CreateNewCharacter onAddCharacter={addCharacter}/>}
                />
            </Routes>

        </>
    );
}
