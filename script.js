const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado: "Qual o seu nível de conhecimento sobre o Reino Fungi ?",
alternativas: [
{
texto: "Baixo",

afirmacao: "Você sabe apenas a base sobre o Reino Fungi "
},
{
texto: "Médio",

afirmacao: "Você tem um bom entendimento sobre o Reino Fungi. "
},
{
texto: "Alto",

afirmacao: "Você tem tem um conhecimento aprofundado sobre o Reino Fungi"
}
]
},
{
enunciado: "1 - Qual dos seguintes ambientes é propício para o crescimento de fungos?",
alternativas: [
{
texto: "a)  Locais úmidos e quentes",

afirmacao: " Esta alternativa esta correta pois os fungos se desenvolvem melhor em ambientes com alta umidade e temperatura, favorecendo seu crescimento e reprodução." 
},
{
texto: "b) Locais secos e frios",

afirmacao: " Está alternativa está incorreta. "
},
{
texto: "c) Locais ensolarados",
afirmacao: "Está alternativa está incorreta. "
},
{
texto: "d) Locais ventilados",
afirmacao: "Está alternativa está incorreta. "
}

]
},
{
enunciado: "2 - Qual é a principal função dos fungos no ecossistema?",
alternativas: [
{
texto: "a) Realizar fotossíntese",
afirmacao: "Está alternativa está incorreta. "
},
{
texto: "b) Decompor matéria orgânica",

afirmacao: "Está alternativa está correta pois os fungos desempenham um papel fundamental na decomposição de matéria orgânica, contribuindo para o ciclo de nutrientes no ecossistema. "

},
{
texto: "c) Produzir oxigênio",
afirmacao: "Está altenativa está incorreta. "
},
{
texto: "d) Regular a temperatura do ambiente",
afirmacao: "Está alternativa está incorreta. "
}
]
},
{
enunciado: "3 - Quais desses alimentos são mais propensos a serem contaminados por fungos ?",
alternativas: [
{
texto: "a) Frutas frescas",
afirmacao: "Está alternativa está incorreta. "
},
{
texto: "b) Pães e bolos úmidos",
afirmacao: "Está alternativa está correta pois alimentos ricos em umidade, como pães e bolos, são mais suscetíveis à contaminação por fungos devido às condições ideais para seu crescimento. "

},
{
texto: "c) Carnes frescas",
afirmacao: "Está alternativa está incorreta. "

},

{
texto: "d) Legumes secos",
afirmacao: "Está alternativa está incorreta. "

}
]
}
  

];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
if (atual >= perguntas.length) {
mostraResultado();
return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}
function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", () =>
respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}
function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}
function mostraResultado() {
caixaPerguntas.textContent = "Obrigado por completar o quiz!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();
