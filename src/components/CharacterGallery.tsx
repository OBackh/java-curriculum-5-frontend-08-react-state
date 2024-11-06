import {Character} from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";

type CharacterGalleryProps = {
    characters: Character[];
}

export default function CharacterGallery({characters}: CharacterGalleryProps) {
    return (
        <div>
            <h3>Character List:</h3>
            <ul>
                {characters.map((char, index) => (
                    <li key={index}>{char.name} - {char.species} - {char.status}</li>
                ))}
            </ul>
        </div>
    );
}
