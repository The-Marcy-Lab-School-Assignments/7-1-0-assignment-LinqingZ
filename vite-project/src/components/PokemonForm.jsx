import { useState, useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const PokemonForm = () => {
    const { addPokemon } = useContext(PokemonContext);
    const [formData, setFormData] = useState({
        name: '',
        hp: '',
        front: '',
        back: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPokemon = {
            id: Date.now(),
            name: formData.name,
            hp: formData.hp,
            front: formData.front,
            back: formData.back
        };
        addPokemon(newPokemon);
        setFormData({ name: '', hp: '', front: '', back: '' });
    };

    return (
        <div>
            <h3>Add a Pokemon!</h3>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="field ui fluid">
                        <label>HP</label>
                        <input type="text" name="hp" placeholder="HP" value={formData.hp} onChange={handleChange} />
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input type="text" name="front" placeholder="url" value={formData.front} onChange={handleChange} />
                    </div>
                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input type="text" name="back" placeholder="url" value={formData.back} onChange={handleChange} />
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PokemonForm;