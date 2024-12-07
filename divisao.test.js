// divisao.test.js
const divisao = require('./divisao');

describe('Função divisao', () => {
  test('Retornar o resultado correto para divisão normal', () => {
    expect(divisao(10, 2)).toBe(5);
  });

  test('Retornar 0 quando a divisão resultar em Infinity', () => {
    expect(divisao(10, 0)).toBe(0);
  });

  test('Retornar 0 se ambos os números forem 0', () => {
    expect(divisao(0, 0)).toBe(0);
  });
});
