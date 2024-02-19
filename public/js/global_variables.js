
var exemplo



var filtrosFace = new Array();
var dadosBase = new Array();
var table = new Array();

var ficheiro = "Nome do ficheiro";
var pedido = "500";
var nameFace = "Nome da Face";
var larguraFace;
var alturaFace;
var profundidadeFace;
var proporcao = 1.3;
var center = 3.5;
var left = 0;
var right = 0;
var down = 0;
var up = 0;
var sidebarvisible = false;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const form = document.getElementById('filtro');



var faceWidgets = new Array();
var furacaoWidgets = new Array();
var lineWidgets = new Array();
var tableWidgets = new Array();
var orientationWidgets = new Array();
var marcacaoFuroWidgets = new Array();
var marcacaoNumeroWidgets = new Array();
var marcacaoDistanciaWidgets = new Array();
var marcacaoLegendaWidgets = new Array();



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

