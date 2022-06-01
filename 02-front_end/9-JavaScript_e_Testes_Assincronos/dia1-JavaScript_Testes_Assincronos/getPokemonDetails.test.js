const { getPokemonDetails } = require("./exercicio");

describe('Teste da função getPokemonDetails', () => {
  it('Testa pokémon Bulbasaur', (done) => {
    getPokemonDetails('Bulbasaur', (filter) => {
      try {
        expect(filter).toBe(`Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf`);
      } catch (err) {
        done(err);
      }
    })
  })
})