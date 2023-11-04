//Lados
const lado1 = 5;
const lado2 = 6;
const lado3 = 7;

//Perimetro
const solucao = (lado1 + lado2 + lado3) / 2;

//Aerea do triangulo
const aerea = Math.sqrt(solucao * (solucao - lado1) * (solucao - lado2) * (solucao -lado3));

console.log(aerea)
