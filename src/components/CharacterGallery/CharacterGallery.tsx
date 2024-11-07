import {Character, PageInfo} from "../../types/RickAndMortyCharacter.ts";
import CharacterCard from "../CharacterCard/CharacterCard.tsx";
import "./CharacterGallery.css";


type CharacterGalleryProps = {
    characters: Character[];
    page: number; // page-Prop from SearchCharacters
    pageInfo: PageInfo; // pageInfo-Prop from SearchCharacters
}

export default function CharacterGallery({ characters, page, pageInfo }: CharacterGalleryProps) {
    return (
        <>
            <h3>Character List:<br/></h3>
            <p>{pageInfo ? `Page ${page} of ${pageInfo.pages}` : "Loading..."}</p>
            <div>
                <ul className="character-gallery">
                    {characters.map((character) => (
                        <li key={character.id}> {/* assuming each character has a unique id */}
                            <CharacterCard character={character}/>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    );
}
