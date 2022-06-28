import React from "react";
import pokemons from "../data";
import Pokemon from "./Pokemon";

class ShowAllPokemons extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      filterType: pokemons,
    };

    this.handleBtnNext = this.handleBtnNext.bind(this);
    this.handleBtnPrev = this.handleBtnPrev.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleBtnPrev() {
    const { filterType } = this.state
    if (this.state.index === 0) {
      this.setState(() => ({
        index: filterType.length - 1,
      }));
    } else {
      this.setState(({ index }) => ({
        index: index - 1,
      }));
    }
  }

  handleBtnNext() {
    const { filterType } = this.state
    if (this.state.index === filterType.length - 1) {
      this.setState(() => ({
        index: 0,
      }));
    } else {
      this.setState(({ index }) => ({
        index: index + 1,
      }));
    }
  }

  handleClick({ target: { name } }) {
    if (name === "All") {
      this.setState({ filterType: pokemons, index: 0 });
    } else {
      const filterPoke = pokemons.filter((obj) => obj.type === name);
      this.setState({ filterType: filterPoke, index: 0  });
    }
  }

  render() {
    return this.state.filterType.map((print) => {
      return (
        <div>
          <div className="divPai">
            <button className="btn-move" onClick={this.handleBtnPrev}>
              prev
            </button>
            <Pokemon
              name={print.name}
              type={print.type}
              average={print.averageWeight.value}
              image={print.image}
            />
            <button className="btn-move" onClick={this.handleBtnNext}>
              next
            </button>
          </div>
          <div>
            <button name="All" onClick={this.handleClick}>
              All
            </button>
            <button name="Electric" onClick={this.handleClick}>
              Eletric
            </button>
            <button name="Fire" onClick={this.handleClick}>
              Fire
            </button>
          </div>
        </div>
      );
    })[this.state.index];
  }
}

export default ShowAllPokemons;
