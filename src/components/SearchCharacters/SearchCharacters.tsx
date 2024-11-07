import '../../App.css'
import CharacterGallery from "../CharacterGallery/CharacterGallery.tsx";
import {useState} from "react";
import './SearchCharacters.css'
import {PageInfo} from "../../types/RickAndMortyCharacter.ts";

type Character = {
    name: string;
    species: string;
    status: string;
};

type SearchCharactersProps = {
    characters: Character[];
    page: number; //page-status from App.tsx
    setPage: React.Dispatch<React.SetStateAction<number>>; // add setPage as Prop
    pageInfo: PageInfo
}

export default function SearchCharacters({characters, page, pageInfo}: SearchCharactersProps) {
    const [searchText, setSearchText] = useState<string>("");
    console.log("Characters Props:", characters); // Debug-Ausgabe
    const filteredCharacters: Character[] = characters.filter((character) =>
        character.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            <input className="inputField" type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
            {
                filteredCharacters.length > 0
                    ? <CharacterGallery characters={filteredCharacters} page={page} pageInfo={pageInfo}/>
                    : <p>No characters found</p>
            }
        </>
    );
}
