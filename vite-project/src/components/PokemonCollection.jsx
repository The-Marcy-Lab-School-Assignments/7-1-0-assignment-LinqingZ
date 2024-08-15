import { useContext } from 'react';
import PokemonCard from './PokemonCard';
import { PokemonContext } from '../context/PokemonProvider';

const PokemonCollection = () => {
    const { pokemons } = useContext(PokemonContext);

    return (
        <div className="ui six cards">
            {pokemons?.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
        </div>
    );
};

export default PokemonCollection;