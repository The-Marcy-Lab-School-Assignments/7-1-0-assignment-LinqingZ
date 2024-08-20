import { useContext } from 'react';
import PokemonCard from './PokemonCard';
import PokemonContext from '../context/PokemonContext';

const PokemonCollection = () => {
    const { pokemon } = useContext(PokemonContext);

    return (
        <div className="ui six cards">
            {pokemon?.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
        </div>
    );
};

export default PokemonCollection;