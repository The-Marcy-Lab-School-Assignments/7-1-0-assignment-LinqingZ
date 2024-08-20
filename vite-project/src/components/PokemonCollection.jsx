import { useContext } from 'react';
import PokemonCard from './PokemonCard';
import PokemonContext from '../context/PokemonContext';

const PokemonCollection = () => {
    const { pokemon, filteredPokemon } = useContext(PokemonContext);
    console.log("filteredPokemon collection", filteredPokemon);

    return (
        <div className="ui six cards">
            {/* {filteredPokemon ? filteredPokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>) :pokemon?.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)} */}
            {(filteredPokemon ? filteredPokemon : pokemon)?.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}
        </div>
    );
};

export default PokemonCollection;