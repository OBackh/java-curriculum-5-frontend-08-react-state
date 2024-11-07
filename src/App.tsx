import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import SearchCharacters from "./components/SearchCharacters/SearchCharacters.tsx";
import Navigation from "./components/Navigation.tsx";
import CreateNewCharacter from "./components/CreateNewCharacter.tsx";
import {useEffect, useState} from "react";
//import {characters as existingCharacters} from "./Characters";
import axios from "axios"; //API Helper for easy fetching (See Line 23!)
import { PageInfo } from "./types/RickAndMortyCharacter.ts";

type Character = {
    name: string,
    species: string,
    status: string,
}

export default function App() {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState<number>(1);
    const [pageInfo, setPageInfo] = useState<PageInfo>([]);

    useEffect(()=>{
        console.log("Sending Request for page "+ page)
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then((response) => {
                setCharacters(response.data.results);
                //Add new Characters to old ones
                //setCharacters([...setCharacters, ...response.data.results])
                setPageInfo(response.data.info)
            })
            .catch((error) => {
                alert(error.message)
            });
        console.log("Done Sending Request!")
    }, [page]) //change when page change

    // useEffect(()=>{
    //     console.log("one time change")
    //     loadAllCharacters()
    // }, []) //one time change
    //
    // useEffect(()=>{
    //
    // console.log("every time change")
    // loadAllCharacters()
    // }) //every time change

    function pageUp() {
        if(page < pageInfo.pages) {
            setPage(page+1)
        }
    }

    function pageDown() {
        if(page > 1){
            setPage(page - 1)
        }
    }

    const addCharacter = (newCharacter: Character) => {
        setCharacters((prevCharacters) => [...prevCharacters, newCharacter]);
    };

    return (
        <>
            <Navigation/>
            <button onClick={pageUp}>Page-up</button>
            <button onClick={pageDown}>Page-down</button>
            <Routes>
                <Route path="/" element={<SearchCharacters characters={characters} page={page} setPage={setPage} pageInfo={pageInfo}/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/characters" element={<SearchCharacters characters={characters} page={page} setPage={setPage} pageInfo={pageInfo}/>}/>
                <Route path="/create-new-character"
                       element={<CreateNewCharacter onAddCharacter={addCharacter}/>}
                />
            </Routes>

        </>
    );
}
