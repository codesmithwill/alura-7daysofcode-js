document.addEventListener('DOMContentLoaded', () => {
    // Obtém o nome do arquivo HTML atual sem a extensão
    const fileName = window.location.pathname.split('/').pop().split('.').shift();
    
    // Define o ID dinâmico para o código do enunciado e resolução
    const codeEnunciadoElement = document.querySelector('pre > code#enunciado');
    codeEnunciadoElement.id = `${fileName}-enunciado`;

    const codeResolucaoElement = document.querySelector('pre > code#resolucao');
    codeResolucaoElement.id = `${fileName}-resolucao`;

    // Define o ID dinâmico para os botões
    const enunciadoButtonElement = document.querySelector('.copiar-enunciado');
    enunciadoButtonElement.setAttribute('data-id', `${fileName}-enunciado`);

    const resolucaoButtonElement = document.querySelector('.copiar-resolucao');
    resolucaoButtonElement.setAttribute('data-id', `${fileName}-resolucao`);
});

function copiarEnunciado() {
    const fileName = window.location.pathname.split('/').pop().split('.').shift();
    const codigoId = `${fileName}-enunciado`;
    
    const codigo = document.getElementById(codigoId).innerText;
    navigator.clipboard.writeText(codigo).then(() => {
        alert('Enunciado copiado para a área de transferência!');
    }).catch((err) => {
        alert('Erro ao copiar o enunciado: ' + err);
    });
}

function copiarResolucao() {
    const fileName = window.location.pathname.split('/').pop().split('.').shift();
    const codigoId = `${fileName}-resolucao`;

    const codigo = document.getElementById(codigoId).innerText;
    navigator.clipboard.writeText(codigo).then(() => {
        alert('Resolução copiada para a área de transferência!');
    }).catch((err) => {
        alert('Erro ao copiar a resolução: ' + err);
    });
}

function dia1() {
    let numeroUm = 1;
    let stringUm = '1';
    let numeroTrinta = 30;
    let stringTrinta = '30';
    let numeroDez = 10;
    let stringDez = '10';

    // Comparando numeroUm com stringUm
    if (numeroUm == stringUm) {
        console.log('As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes');
    } else {
        console.log('As variáveis numeroUm e stringUm não têm o mesmo valor');
    }

    // Comparando numeroTrinta com stringTrinta
    if (numeroTrinta == stringTrinta && typeof numeroTrinta === typeof Number(stringTrinta)) {
        console.log('As variáveis numeroTrinta e stringTrinta têm o mesmo valor e mesmo tipo');
    } else {
        console.log('As variáveis numeroTrinta e stringTrinta não têm o mesmo tipo');
    }

    // Comparando numeroDez com stringDez
    if (numeroDez == stringDez) {
        console.log('As variáveis numeroDez e stringDez têm o mesmo valor, mas tipos diferentes');
    } else {
        console.log('As variáveis numeroDez e stringDez não têm o mesmo valor');
    }
    alert('Código executado! Confira o console.')
}

function dia2() {
const nome = prompt('Qual o seu nome?');
const idade = Number(prompt('Qual a sua idade?'));
const linguagem = prompt('Qual a linguagem que você está estudando?');
const msgAlerta = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem} !`;
alert(msgAlerta)

let gostaLinguagem;

while (gostaLinguagem !== '1' && gostaLinguagem !== '2') {
    gostaLinguagem = prompt(`Você gosta de ${linguagem} ? Responda 1 para SIM ou 2 para NÃO`);

    if (gostaLinguagem === '1') {
        alert("Muito bom! Continue estudando e você terá muito sucesso.");
    } else if (gostaLinguagem === '2') {
        alert("Ahh que pena... Já tentou aprender outras linguagens?");
    } else {
        alert("Resposta inválida. Por favor, responda com 1 para SIM ou 2 para NÃO.");
    }
}
}

function dia3() {
const nome = prompt('Olá! Seja bem-vindo! Escreva seu nome: ');

let frontEnd = 1;
let backEnd = 2;

let escolhaLinguagem; 

while(true) {
    escolhaLinguagem = prompt(`${nome}, para qual área pretende seguir? \n${frontEnd} - FrontEnd. \n${backEnd} - BackEnd.`);

    if(escolhaLinguagem == 1) {
        prompt(`Compreendo ${nome}! Você pretende seguir para a área de FrontEnd! E o que quer aprender: \nReact.  \nVue.`);
        break;
    } else if (escolhaLinguagem == 2) {
        prompt(`Compreendo ${nome}! Você pretende seguir para a área de BackEnd! E o que quer aprender: \nJava. \nC#. `);
        break;
    } else {
        alert(`${nome}, escolha inválida! Por favor, escolha apenas 1 ou 2.`);
    }
}

const especializacaoNaArea = 1;
const especializacaoFullStack = 2; 

let escolhaEspecializacao; 

while(true) {
    escolhaEspecializacao = prompt(`${nome}, você escolheu a área da programação e o que pretende aprender, agora escolha: \n${especializacaoNaArea} - Pretende seguir se especializando na área escolhida? \n${especializacaoFullStack} - Pretende seguir se desenvolvendo para se tornar FullStack?`);

    if(especializacaoNaArea == 1) {
        alert('Focar e se aprofundar na sua área é uma escolha inteligente. Continue crescendo e se destacando!');
        break;
    } else if (especializacaoNaArea == 2) {
        alert('Explorar o Fullstack é desafiador e recompensador. Siga em frente e construa sua jornada versátil na programação!');
        break;
    } else {
        alert('Escolha inválida! Por favor, escolha apenas 1 ou 2');
    }
}

let especializacaoTecnologias;
let condicao = 'pronto';

alert(`Parabéns por ter chegado até aqui ${nome}! Por fim, nos conte quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer`);

while(especializacaoTecnologias !== condicao) {
    especializacaoTecnologias = prompt(`Responda uma de cada vez, e quando não houver mais escolhas digite "${condicao}" : `);
}

alert(`Obrigado por participar ${nome}! Volte sempre que puder!`)
}

function dia4() {
const numeroCorreto = Math.floor(Math.random() * 11); // Número aleatório 0 á 10
let tentativas = 3;

let chute = parseInt(prompt("Chute um número entre 0 e 10:"));

while (tentativas > 0) {
    if (chute === numeroCorreto) {
        alert("Parabéns, você acertou!");
        break;
    } else {
        tentativas--;
        if (tentativas > 0) {
            chute = parseInt(prompt("Você errou. Tente novamente. Restam " + tentativas + " tentativas."));
        } else {
            alert("Você errou todas as tentativas. O número correto era " + numeroCorreto + ".");
        }
    }
}
}