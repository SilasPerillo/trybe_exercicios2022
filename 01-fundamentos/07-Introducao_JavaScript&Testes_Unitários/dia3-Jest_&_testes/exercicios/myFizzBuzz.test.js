const {myFizzBuzz} = require('./myFizzBuzz');

describe('Verifica valores da função fizzBuzz', () =>{
  it('Verifica valor divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  it('Verifica valor divisível por 3', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  })
  it('Verifica valor divisível por 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })
  it('Verifica valor não divisível por 3 e 5', () => {
    expect(myFizzBuzz(8)).toBe(8);
  })
  it('Verifica valor não numerico', () => {
    expect(myFizzBuzz('8')).toBe(false);
  })
})