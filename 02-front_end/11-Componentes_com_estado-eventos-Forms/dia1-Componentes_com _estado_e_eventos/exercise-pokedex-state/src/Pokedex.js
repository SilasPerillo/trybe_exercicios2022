import React from 'react';
import {
  arrayOf,
} from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from './types';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {pokemons.map((pokemon) => (
          <Pokemon key={ pokemon.id } pokemon={ pokemon } />
        ))}
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
