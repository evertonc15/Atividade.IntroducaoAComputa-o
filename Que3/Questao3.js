function calcularDiferencaEspecial(numero) {
    var diferenca = numero - 13;
  
    if (diferenca > 0) {
      return diferenca * 2;
    } else {
      return Math.abs(diferenca);
    }
  }
  
  var numero1 = 8;
  var numero2 = 20;
  
  console.log(`A diferença entre ${numero1} e 13 é: ${calcularDiferencaEspecial(numero1)}`);
  console.log(`A diferença entre ${numero2} e 13 é: ${calcularDiferencaEspecial(numero2)}`);
  