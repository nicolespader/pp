import { SetScore, GetScore, checkUser } from "./DB/src/script.js";

const buttons = document.querySelectorAll('.opcao-box');
const questionq = document.getElementById('questao');
const placar = document.getElementById('pontos')
const content = [
    {pergunta: "Qual cor é frequentemente associada a sentimentos de tranquilidade e relaxamento?",
    r1: "Vermelho",
    r2: "Preto",
    r3: "Azul",
    r4: "Amarelo",
    resposta: 3},

    {pergunta: "Qual cor é muitas vezes usada para estimular o apetite em ambientes como restaurantes?",
    r1: "Vermelho",
    r2: "Azul",
    r3: "Roxo",
    r4: "Rosa" ,
    resposta: 1},

    {pergunta: "Qual cor é geralmente considerada a mais enérgica e estimulante?",
    r1: "Branco",
    r2: "Amarelo",
    r3: "Laranja",
    r4: "Verde",
    resposta: 2},

    {pergunta: "Qual cor é frequentemente associada a emoções de tristeza e melancolia?",
    r1: "Ciano",
    r2: "Cinza",
    r3: "Preto",
    r4: "Azul",
    resposta: 4},
];
var i = 0
var points = 0;

function startGame(userId) {
    changeQuestion()

    buttons[0].addEventListener("click", () => {
        verifyQuestion(1, userId)
        changeQuestion()
    })
    buttons[1].addEventListener("click", () => {
        verifyQuestion(2, userId)
        changeQuestion()
    })
    buttons[2].addEventListener("click", () => {
        verifyQuestion(3, userId)
        changeQuestion()
    })
    buttons[3].addEventListener("click", () => {
        verifyQuestion(4, userId)
        changeQuestion()
    })
}

function verifyQuestion(number, userId) {
    console.log(userId)
    console.log(content[i].resposta)
    console.log(number)
    if (number == content[i-1].resposta) {
        points+=50
    } else {
        points-=25
        if (points <= 0) {
            points = 0;
        }
    }
    placar.innerText = points;
    SetScore(userId, points)
}

function changeQuestion() { 
    questionq.innerText = content[i].pergunta;
    buttons[0].innerText = content[i].r1
    buttons[1].innerText = content[i].r2
    buttons[2].innerText = content[i].r3
    buttons[3].innerText = content[i].r4
    i++
}

checkUser().then((result) => {
    if (result.status === 'log') {
        const userData = result.userAuthData
        console.log('Usuário logado com dados de autenticação:', result.userAuthData.uid);
        console.log('Dados do usuário do banco de dados:', result.userData);
        startGame(userData.uid)
    } else {
        console.log('Usuário não está logado, redirecionando para login');
        window.location.href = "../cadastro_login/login.html";
    }
}).catch((error) => {
    console.error('Erro ao verificar usuário:', error);
});


