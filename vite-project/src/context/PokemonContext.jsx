import { createContext, useState } from 'react';

// Create the context
const PokemonContext = createContext();

// Create a provider component
const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);

    return (
        <PokemonContext.Provider value={{ pokemons, setPokemons }}>
            {children}
        </PokemonContext.Provider>
    );
};

export { PokemonContext, PokemonProvider };