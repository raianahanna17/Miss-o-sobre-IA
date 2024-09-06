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

afirmacao: ["Você sabe apenas a base sobre o Reino Fungi ",
            " Preciso melhorar meus conhecimentos",
            " Meus conhecimentos estão no nível de iniciante."
           ]
},
{
texto: "Médio",

afirmacao: ["Você tem um bom entendimento sobre o Reino Fungi ",
            "Estou aprendendo e preciso melhorar",
            " Meus conhecimentos estão no nível intermediário."
            ]
},
{
texto: "Alto",

afirmacao: [ "Você tem tem um conhecimento aprofundado sobre o Reino Fungi",
            " Preciso me aprofundar, mas tenho um bom conhecimento sobre o Reino Fungi",
            " Meus conhecimentos estão no nível avançado."
            ]
}
]
},
{
enunciado: "1 - Qual dos seguintes ambientes é propício para o crescimento de fungos?",
alternativas: [
{
texto: "a)  Locais úmidos e quentes",

afirmacao: " 1-A) Esta alternativa esta correta pois os fungos se desenvolvem melhor em ambientes com alta umidade e temperatura, favorecendo seu crescimento e reprodução",
            "Pois ambientes úmidos e quentes proporcinam água e calor, essenciais para a ativação e crescimento rápido dos esporos de fungos",
            "A umidade alta pode inibir outros organismos, reduzindo a competição por recursos e permintindo que os fungos se estabeleçam e se proliferem com mais facilidade."
},
{
texto: "b) Locais secos e frios",

afirmacao: " Está alternativa está incorreta",
            "Está incorreta pois locais secos não têm a umidade necessária para a ativação e crescimento dos esporos de fungos",
            "Está incorreta pois ambientes frios desaceleram o metabolismo dos fungos, dificultando seu crescimento e reprodução."
},
{
texto: "c) Locais ensolarados",
afirmacao: "Está alternativa está incorreta",
            "Está incorreta pois a luz solar intensa reduz a umidade, tornando o ambiente seco e desfavorável para os fungos",
            "Está incorreta pois o calor excessivo estressa os fungos, dificultando seu crescimento e desenvolvimento."
},
{
texto: "d) Locais ventilados",
afirmacao: "Está alternativa está incorreta",
            "Está incorreta pois a ventilação aumenta a evaporação da umidade, tornando o ambiente seco e desfavorável para os fungos",
            "Está incorreta pois a circulação de ar dispersa os esporos, dificultando a colonização e o crescimento em áreas específicas."
}

]
},
{
enunciado: "2 - Qual é a principal função dos fungos no ecossistema?",
alternativas: [
{
texto: "a) Realizar fotossíntese",
afirmacao: "Está alternativa está incorreta",
            "Está incorreta pois os fungos são heterotróficos e obtêm energia de matéria orgânica, reciclando nutrientes no ecossistema",
            "Está incorreta pois os fungos formam relações simbióticas com plantas, ajudando na absorção de nutrientes, mas não realizam fotossíntese."
},
{
texto: "b) Decompor matéria orgânica",

afirmacao: "2-B) Está alternativa está correta pois os fungos desempenham um papel fundamental na decomposição de matéria orgânica, contribuindo para o ciclo de nutrientes no ecossistema",
            "Está correta pois os fungos decompõem matéria orgânica, liberando nutrientes essenciais para o solo",
            "Está correta pois eles ajudam a controlar a acumulação de resíduos, mantendo o equilíbrio ecológico."

},
{
texto: "c) Produzir oxigênio",
afirmacao: "Está altenativa está incorreta",
            "Está incorreta pois os fungos não têm clorofila, portanto, não realizam fotossíntese e não produzem oxigênio",
            "Está incorreta pois a principal função dos fungos é decompor matéria orgânica, focando na reciclagem de nutrientes."
},
{
texto: "d) Regular a temperatura do ambiente",
afirmacao: "Está alternativa está incorreta",
            "Está incorreta pois os fungos se concentram na decomposição de matéria orgânica e reciclagem de nutrientes, não na regulação da temperatura",
            "Está incorreta pois embora possam afetar o microclima, isso não é sua função principal, pois não têm mecanismos para regular a temperatura como outros organismos."
}
]
},
{
enunciado: "3 - Quais desses alimentos são mais propensos a serem contaminados por fungos ?",
alternativas: [
{
texto: "a) Frutas frescas",
afirmacao: "Está alternativa está incorreta",
            "Está incorreta pois as cascas das frutas atuam como barreiras contra contaminações fúngicas",
            "Está incorreta pois frutas frescas têm um teor de umidade controlado, o que dificulta o crescimento de fungos."
},
{
texto: "b) Pães e bolos úmidos",
afirmacao: "3-B) Está alternativa está correta pois alimentos ricos em umidade, como pães e bolos, são mais suscetíveis à contaminação por fungos devido às condições ideais para seu crescimento",
            "Está alternativa está correta pois a umidade excessiva proporciona condições ideais para o crescimento de fungos",
            "Está alternativa está correta pois pães e bolos contêm açúcares e amidos que nutrem os fungos em ambientes úmidos."

},
{
texto: "c) Carnes frescas",
afirmacao: "Está alternativa está incorreta",
            "Está alternativa está incorreta pois carnes frescas têm menos umidade, o que dificulta o crescimento de fungos",
            "Está alternativa está incorreta pois o pH mais ácido da carne não favorece a proliferação de muitos fungos."

},

{
texto: "d) Legumes secos",
afirmacao: "Está alternativa está incorreta",
            "Está alternativa está incorreta pois legumes secos têm pouca umidade, dificultando o crescimento de fungos",
            "Está alternativa está incorreta pois a secagem inibe a atividade de micro-organismos, tornando os legumes menos suscetíveis à contaminação."

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
