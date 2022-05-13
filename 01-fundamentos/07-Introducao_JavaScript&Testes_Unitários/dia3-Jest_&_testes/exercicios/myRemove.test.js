const {myRemove} = require('./myRemove');

describe('Verifica se o valor inputado no "item" não esta contido no "array"', () => {
  it('Retorna o array retirando o item', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})