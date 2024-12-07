// divisao.js
function divisao(a, b) {
    if (b === 0) {
      return 0; // Retorna 0 quando a divisão resulta em "Infinity"
    }
    return a / b;
  }
  
  module.exports = divisao;
  