function somar(){
    var numero1 = Number(prompt("Digite o primeiro numero: "))
    var numero2 = Number(prompt("Digite o segundo numero: "))

    var soma = numero1 + numero2;
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `<p>${numero1} + ${numero2} = ${soma}</p>`
}