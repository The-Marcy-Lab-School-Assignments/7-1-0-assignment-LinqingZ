import { useState, useEffect } from "react";
import handleFetch from '../utils/handleFetch';
import PokemonContext from "./PokemonContext";

const starterPokemon = [
    {
        id: 0,
        name: "butterfree 1",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 1,
        name: "butterfree 2",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 2,
        name: "butterfree 3",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    }
]

const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState(starterPokemon);
    // const [searchTerm, setSearchTerm] = useState('');
    const [filteredPokemon, setFilteredPokemon] = useState("");

    useEffect(() => {
        handleFetch('http://localhost:4000/pokemon')
            .then(data => {
                console.log("data", data[0]);
                setAllPokemon(data[0]);
            });
    }, []);

    const addPokemon = (newPokemon) => {
        setAllPokemon([...allPokemon, newPokemon]);
        fetch('http://localhost:4000/pokemon', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPokemon)
        });
    };

    const contextValues = {
        pokemon: allPokemon,
        addPokemon,
        filteredPokemon: filteredPokemon,
        setFilteredPokemon
    };

    return (
        <PokemonContext.Provider value={contextValues}>
            {children}
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;