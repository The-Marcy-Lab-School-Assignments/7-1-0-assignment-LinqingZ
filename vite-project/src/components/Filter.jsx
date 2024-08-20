import { useContext, useState, useEffect } from 'react';
import PokemonContext from '../context/PokemonContext';

const Filter = () => {
    const { pokemon, filteredPokemon, setFilteredPokemon } = useContext(PokemonContext);
    
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        console.log("setFilteredPokemon([...pokemon]);", pokemon);
        setFilteredPokemon([...pokemon]);
    }, [pokemon]);

    const handleSearch = (e) => {
        console.log("filteredPokemon", filteredPokemon);
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);
        const filtered = pokemon.filter(p => p.name.toLowerCase().includes(searchTerm));
        setFilteredPokemon(filtered);
    };

    return (
        <div className="ui search">
            <div className="ui icon input">
                <input
                    className="prompt"
                    placeholder="Search by Name..."
                    onChange={handleSearch}
                />
                <i className="search icon" />
            </div>
        </div>
    );
};

export default Filter;