import {ChangeEvent, FormEvent, useState} from "react";

type Character = {
    name: string,
    species: string,
    status: string,
    image: string
}

type CreateNewCharacterProps = {
    onAddCharacter: (character: Character) => void;
}

export default function CreateNewCharacter({onAddCharacter}: CreateNewCharacterProps) {

    const [character, setCharacter] = useState<Character>({name: "", species: "", status: "", image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg"})

    const onCharacterChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCharacter({...character, [event.target.name]: event.target.value})
    }

const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    //log new data from form
    console.log(character);
    console.log("Name:", character.name);
    console.log("Species:", character.species);
    console.log("Status:", character.status)

    //Add new char
    onAddCharacter(character);
    //Reset form
    setCharacter({ name: "", species: "", status: "", image: ""});

    }

    return (
        <>
            <div className="createFormContainer">
                <form onSubmit={onSubmit}>
                    <label>Name:
                        <input value={character.name} name="name" onChange={onCharacterChange}/>
                    </label>
                    <label>Species:
                        <input value={character.species} name="species" onChange={onCharacterChange}/>
                    </label>
                    <label>Status:
                        <input value={character.status} name="status" onChange={onCharacterChange}/>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}