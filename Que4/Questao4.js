function calcularSomaOuTriplo(num1, num2) {
    var soma = num1 + num2;
    
    if (num1 == num2) {
      return soma * 3;
    } else {
      return soma;
    }
  }
  
  var numero1 = 5;
  var numero2 = 5;
  
 
  console.log(`A soma de ${numero1} e ${numero2} é: ${calcularSomaOuTriplo(numero1, numero2)}`);
  