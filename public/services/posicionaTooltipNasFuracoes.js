function reDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    var filtros = new Array();
    filtros = getFiltros();
    if (dadosBase.length > 0) {
        return drawCore(filtros, false);
    } else {
        return drawCoreNoParam();
    }
}
function defaultConfig(){
    proporcao = 1.3;
    center = 3.5;
    left = 0;
    right = 0;
    down = 0;
    up = 0;
    var furos = reDraw();
    changeDivFuro(furos);
}
function changeScale(value) {
    proporcao = parseFloat(value);
    var furos = reDraw();
    changeDivFuro(furos);

}
function changeLeft(value) {
    left = parseInt(value);
    var furos = reDraw();
    changeDivFuro(furos);

}
function changeRight(value) {
    right = parseInt(value);
    var furos = reDraw();
    changeDivFuro(furos);

}
function changeDown(value) {
    down = parseInt(value);
    var furos = reDraw();
    changeDivFuro(furos);

}
function changeUp(value) {
    up = parseInt(value);
    var furos = reDraw();
    changeDivFuro(furos);

}
function changeCenter(value) {
    center = parseFloat(value);
    var furos = reDraw();
    changeDivFuro(furos);

}
function changeDivFuro(value){
    try {
        document.querySelectorAll('.furacao').forEach(e => e.remove());
        value.forEach(furo => {
            var operacaoEncontrada = translator.find(item => item.operacao.toUpperCase() == furo.param.O.toUpperCase()); 
           
            const crd = changeDivFuro_identificador(operacaoEncontrada);
            var id = value.indexOf(furo); 
            var div = document.createElement('div');
            var fragment = document.createDocumentFragment();
            div.style.position = "absolute";  
            div.style.top = (furo.object.Y-crd.top_div)+"px";
            // div.style.backgroundColor = "red";
            div.style.left = (furo.object.X-crd.left_div)+"px";
            div.style.width = crd.largura_div+'px';
            div.style.height = crd.altura_div+'px';
            div.setAttribute("onclick", "showtooltip('" + JSON.stringify(furo) + "')");
            div.setAttribute("data-value", id);
            div.setAttribute("class", "furacao");   
            fragment.appendChild(div);
            document.getElementById("main").appendChild(fragment);

        });
    
    } catch (error) {
        throw "changeDivFuro: Erro na criação do posicionamento dos div: " + error
    }
}

function changeDivFuro_identificador(operacaoEncontrada){
    var coordenada = new Object();
    switch (operacaoEncontrada.desenho) {
        case 'circle':
            coordenada.largura_div = operacaoEncontrada.diametro * 2;
            coordenada.altura_div = operacaoEncontrada.diametro * 2;
            coordenada.top_div = operacaoEncontrada.diametro;
            coordenada.left_div = operacaoEncontrada.diametro;
            break;
        case 'linedashed':
            coordenada.largura_div = operacaoEncontrada.diametro * 2;
            coordenada.altura_div = operacaoEncontrada.diametro * 2;
            coordenada.top_div = operacaoEncontrada.diametro;
            coordenada.left_div = operacaoEncontrada.diametro;
            break;
        case 'rectangle':
            coordenada.largura_div = operacaoEncontrada.largura;
            coordenada.altura_div = operacaoEncontrada.altura;
            coordenada.top_div = operacaoEncontrada.altura / 2;
            coordenada.left_div = operacaoEncontrada.largura / 2;
            break;
        case 'sting':
            coordenada.largura_div = operacaoEncontrada.tamanho;
            coordenada.altura_div = operacaoEncontrada.tamanho;
            coordenada.top_div = operacaoEncontrada.tamanho / 2;
            coordenada.left_div = operacaoEncontrada.tamanho / 2;
            break;
    
        default:
            break;
    }
    return coordenada;
}