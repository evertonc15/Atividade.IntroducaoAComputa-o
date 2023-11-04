function obterExtensaoDoArquivo(nomeDoArquivo) {
    const partesDoNome = nomeDoArquivo.split('.');
    const extensao = partesDoNome[partesDoNome.length - 1];
    return extensao;
  }

const arquivo1 = "texto.docx";
const arquivo2 = "roteiro.pdf";

console.log('A extensão do arquivo "${arquivo1}" é: ${obterExtensaoDoArquivo(arquivo1)}');
console.log('A extensão do arquivo "${arquivo2}" é: ${obterExtensaoDoArquivo(arquivo2)}');