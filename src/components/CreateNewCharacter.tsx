import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

type Character = {
    name: string,
    species: string,
    status: string,
    image: string
}

type CreateNewCharacterProps = {
    onAddCharacter: (character: Character & { id: string }) => void;
};

export default function CreateNewCharacter({onAddCharacter}: CreateNewCharacterProps) {

    const navigate = useNavigate(); // init navigate

    const [character, setCharacter] = useState<Character>({
        name: "",
        species: "",
        status: "",
        image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
    })

    const onCharacterChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCharacter({...character, [event.target.name]: event.target.value})
    }

const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    //generate new uuid and add it to the character as id
    const newCharacter = { ...character, id: uuidv4() };
    //Log for check
    console.log(newCharacter);

    console.log("Name:", newCharacter.name);
    console.log("Species:", newCharacter.species);
    console.log("Status:", newCharacter.status)

    //Add new char
    onAddCharacter(newCharacter);
    //Reset form
    setCharacter({name: "", species: "", status: "", image: ""});

    //navigate back to "/"
    navigate("/");

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