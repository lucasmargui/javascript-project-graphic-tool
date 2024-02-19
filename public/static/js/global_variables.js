
//Filtros utilizados no menu
var filtrosFace = new Array();
//Dados que serão incorporados de static/js/data.js
var dadosBase = new Array();
//Utiliza dados base para desenhar a tabela
var table = new Array();

// Para realizar o desenho das figuras geométricas
var faceWidgets = new Array();
var furacaoWidgets = new Array();
var lineWidgets = new Array();
var tableWidgets = new Array();
var orientationWidgets = new Array();
var marcacaoFuroWidgets = new Array();
var marcacaoNumeroWidgets = new Array();
var marcacaoDistanciaWidgets = new Array();
var marcacaoLegendaWidgets = new Array();


// Informações sobre o desenho

const ficheiro = "Nome do ficheiro";
const pedido = "500";
const nameFace = "Nome da Face";


// Informações sobre a dimensão do desenho

let larguraFace, alturaFace, profundidadeFace;



// Configurações do menu para visibilidade do desenho

var proporcao = 1.3;
var center = 3.5;
var left = 0;
var right = 0;
var down = 0;
var up = 0;
var sidebarvisible = false;


// Canvas é objeto utilizado para realizar os desenhos
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const form = document.getElementById('filtro');



// Alterando variaveis globais

function alteraVariavelGlobal(){
    
    larguraFace = data[0]["L"];
    alturaFace = data[0]["A"];
    profundidadeFace = data[0]["P"];
}


function alteraVariavelGlobalDados(dados,filtro){
    dadosBase = dados;
    filtrosFace = filtro;
}

function alteraVariavelGlobalTabela(resultadoFiltro){
    table = resultadoFiltro;
}

function alteraVariavelGlobalFuracaoWidgets(furacao){
    furacaoWidgets = furacao;
}

