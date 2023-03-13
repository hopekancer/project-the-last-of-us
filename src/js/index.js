/*objetivo: quando clicar no botao mostrar imagem de fundo correspondente
algoritmo: serie de passos que tem q acontecer pra 
tenha calma nem pensou e ja quer esvcrever? como vc vai saber o que vc vai escrever se vc nao sabe o qiue eh pra fazer?
nesse caso: passo 1 - dar um jeito de pegar o elemento html dos botoes
passo 2 - dar um jeito de identificar o clique do usuario no botao (evento)
passo 3 - demarcar o botao selecionado anterior 
passo 4 - marcr o botao clicado como o selecionado
passo 5 - esconder a imagem de fundo anterior
passo 6 - fazer aparecer a imagem de fundo correspondente ao botao clicado
*/

/*passo 1 - dar um jeito de pegar o elemento html dos botoes
    primeiro document pega o documento, .querySelectorAll diz pra ele selecionar algum seletor geral dentro do documento, ('.botao) informa qual o elemento que o .querySelectorAll deve buscar dentro do document
    depois cont botoesCarrossel cria uma variavel que se chama botoesCarrossel, e o sinal de = assinala a lista de botoes selecionada pelo querySelectorAll('.botao') dentro de document assim: */
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

/*const cria uma variavel chamada botao1 onde getElementById pega o elemento ('botao1') dentro de .document
addEventListener adiciona um grampo no elemento que ele esta controlando, no caso a const botao1, e fica a partir de agora graças a essa operador addEventListener, monitorando o clique do mouse sobre o elemento dono dessa id*/

/*passo 2 - dar um jeito de identificar o clique do usuario no botao (evento)
*/
// const botao1 = document.getElementById('botao1');
// botao1.addEventListener('click', () => {
//     console.log('clicou no botao 1');
// });
//mas isso vai ficar repetido nos outros botoes entao o metodo vai ser o seguinte:
//forEach pega a class 'botao' dentro da variavel 'const botoesCarrossel' (que contem aquela lista de botoes) e assinala uma função onde os elementos 'botao' usam o operador 'addEventListener' para ouvir cada um dos 'cliques' naquela lista de botoes atraves de um laço

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        //passo 3 - demarcar o botao selecionado anterior 
        const botaoSelecionado = document.querySelector('.selecionado');
        //'.querySelection' seleciona um elemento do tipo class '.selecionado' dentro de document e guarda isso na variavel 'const botaoSelecionado'
        botaoSelecionado.classList.remove('selecionado');
        //o operador .remove procura e apaga a string 'selecionado' dentro de uma lista das classes '.classList' dentro da variavel 'const botaoSelecionado'

        //passo 4 - marcr o botao clicado como o selecionado
        botao.classList.add('selecionado');
        //o operador add adiciona a string 'selecionado' na funcao 'botao' la me cima no laço 'forEach'. no 'botao' que estava com o 'addEventListener' e foi clicado acionando a funcao botao. depois de remover a string selecionado de qualquer botao, adiciona a string 'selecionado' no botao que foi clicado
        
        //passo 5 - esconder a imagem ativa de fundo anterior
        esconderImagemAtiva();
        //passo 6 - fazer aparecer a imagem de fundo correspondente ao botao clicado
        imagens[indice].classList.add('ativa');
    })
});



function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

