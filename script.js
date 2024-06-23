const caixaPrincipal = document.querySelector(‘.caixa-
principal’);
const caixaPerguntas = document.querySelector(‘.caixa-
perguntas’);
const caixaAlternativas = document.querySelector(‘.caixa-
alternativas’);
const caixaResultado = document.querySelector(‘.caixa-
resultado’);
const textoResultado = document.querySelector(‘.texto-
resultado’);

const perguntas = [ //abre lista de perguntas
{ //abre objeto de pergunta
enunciado: “1- Qual dos seguintes ambientes é propício para o crescimento de fungos?”,
alternativas: [
“A) Locais úmidos e quentes”,
“B) Locais secos e frios”,
“C) Locais ensolarados",
“D) Locais ventilados"
],
},
  {
enunciado: “2- Qual é a principal função dos fungos no ecossistema?”,
alternativas: [
“A) Realizar fotossíntese”,
“B) Decompor matéria orgânica”,
“C) Produzir oxigênio”,
“D) Regular a temperatura do ambiente”
],
},
  {
enunciado: “3- Quais desses alimentos são mais propensos a serem contaminados por fungos?”,
alternativas: [
“A) Frutas frescas”,
“B) Pães e bolos úmidos”,
“C) Carnes frescas”,
“D) Legumes secos”
],
}//fecha objeto de pergunta
]; //fecha lista de perguntas
let atual = 0;
let perguntaAtual;
}
function mostraAlternativas() {
  perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
  
 function mostraAlternativa() {
for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document. createElement(“button”);
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener(“click”,
function () {
atual++;
mostraPergunta();
});
caixaAlternativas.appendChild(botaoAlternativas);
}
}
