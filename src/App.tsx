import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import SearchCharacters from "./components/SearchCharacters.tsx";
import Navigation from "./components/Navigation.tsx";

export default function App() {

    return (
        <>
            <Navigation/>
           <Routes>

               <Route path="/home" element={<Home/>}/>
               <Route path="/characters" element={<SearchCharacters/>}/>
           </Routes>


        </>
    );
}
