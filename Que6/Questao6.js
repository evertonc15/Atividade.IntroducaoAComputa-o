function calcularMedia(numero1, numero2) {
    if (numero1 >= 0 && numero1 <= 10 && numero2 >= 0 && numero2 <= 10) {
      const media = (numero1 + numero2) / 2;
      return `A média entre ${numero1} e ${numero2} é: ${media}`;
    } else {
      return `Valor inválido: ${numero1 < 0 || numero1 > 10 ? numero1 : numero2 < 0 || numero2 > 10 ? numero2 : "Nenhum valor inválido"}`;
    }
  }
  
  console.log(calcularMedia(5, 7));
  console.log(calcularMedia(12, 7));
  console.log(calcularMedia(5, -2));
  console.log(calcularMedia(15, 12));
  