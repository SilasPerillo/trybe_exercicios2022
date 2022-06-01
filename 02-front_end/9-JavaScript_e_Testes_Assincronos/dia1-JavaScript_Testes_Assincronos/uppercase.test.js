const uppercase = require("./exercicio");

describe("Teste da função uppercase", () => {
  it("Verifica a função uppercase, recebe 'teste' e retorna 'TESTE'", (done) => {
    uppercase("teste", (str) => {
      try {
      expect(str).toBe('TESTE');
      done();
    } catch (err) {
      done(err);
    }
    })
  });
});
