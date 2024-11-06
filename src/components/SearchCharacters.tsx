import '../App.css'
import CharacterGallery from "./CharacterGallery.tsx";
import {useState} from "react";

type Character = {
    name: string;
    species: string;
    status: string;
};

type SearchCharactersProps = {
    characters: Character[];
}

export default function SearchCharacters({characters}: SearchCharactersProps) {
    const [searchText, setSearchText] = useState<string>("");
    console.log("Characters Props:", characters); // Debug-Ausgabe
    const filteredCharacters: Character[] = characters.filter((character) =>
        character.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
            {
                filteredCharacters.length > 0
                    ? <CharacterGallery characters={filteredCharacters}/>
                    : <p>No characters found</p>
            }
        </>
    );
}
