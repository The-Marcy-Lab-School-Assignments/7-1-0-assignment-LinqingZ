import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonProvider';

const Filter = () => {
    const { setSearchTerm } = useContext(PokemonContext);

    return (
        <div className="ui search">
            <div className="ui icon input">
                <input
                    className="prompt"
                    placeholder="Search by Name..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="search icon" />
            </div>
        </div>
    );
};

export default Filter;