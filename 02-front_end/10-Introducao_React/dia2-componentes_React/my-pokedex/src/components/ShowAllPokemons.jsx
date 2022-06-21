import React from "react";
import pokemons from "../data";
import Pokemon from "./Pokemon";

class ShowAllPokemons extends React.Component {
  render() {
    return pokemons.map((print) => {
      return (
        <Pokemon name={print.name} type={print.type} average={print.averageWeight.value} image={print.image}/>
      );
    });
  }
}

export default ShowAllPokemons;
