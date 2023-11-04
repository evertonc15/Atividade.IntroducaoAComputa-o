function removerCaractere(posicao, texto) {
    if (posicao < 0 || posicao >= texto.length) {
      console.log("Posição inválida.");
      return;
    }


const caractereRemovido = texto.charAt(posicao);
const stringModificada = texto.slice(0, posicao) + texto.slice(posicao + 1);

console.log(`Caractere removido: ${caractereRemovido}`);
console.log(`String modificada: ${stringModificada}`);
}

const stringOriginal = "Exemplo";
const posicaoParaRemover = 0;

removerCaractere(posicaoParaRemover, stringOriginal);