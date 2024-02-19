


function configDraw(largura, altura) {

    var position = new Position();

    position.fX = (window.innerWidth / 3.5) + center;

    position.fY = 60 + up / 2;

    position.f5X = position.fX;
    position.f5Y = position.fY;


    position.f3X = position.f5X - 200 + left;
    position.f3Y = position.f5Y + 160 / proporcao + (up / 2);

    position.f1X = position.fX;
    position.f1Y = position.f5Y + 160 / proporcao + (up / 2);

    position.f4X = position.fX + largura + 200 + right;
    position.f4Y = position.f5Y + 160 / proporcao + (up / 2);

    position.f6X = position.fX;
    position.f6Y = position.f1Y + altura + (200 / proporcao + (down / 2)) ;

    
    position.f2X = position.fX;
    position.f2Y = position.f6Y + altura + (200 / proporcao + (down / 2));


    canvas.height = position.f2Y + altura + 200;
    canvas.width = position.f4X + 200;
    ctx.fillStyle = "#EFEFEF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    
    ctx.strokeStyle = "#3F82F9";
    ctx.fillStyle = "black";

    return position;


}
////////////////////////
function drawFace(largura, altura, profundidade, posicaoFace) {
/////////////////ESTILO//////////////////
  

    var face5 = new FACE_NUMERO(posicaoFace.f5X,posicaoFace.f5Y, largura, profundidade, profundidade);
    var face3 = new FACE_NUMERO(posicaoFace.f3X,posicaoFace.f3Y, profundidade, altura, profundidade);
    var face1 = new FACE_NUMERO(posicaoFace.f1X,posicaoFace.f1Y, largura, altura, profundidade);
    var face4 = new FACE_NUMERO(posicaoFace.f4X,posicaoFace.f4Y, profundidade, altura, profundidade);
    var face6 = new FACE_NUMERO(posicaoFace.f6X,posicaoFace.f6Y, largura, profundidade, profundidade);
    var face2 = new FACE_NUMERO(posicaoFace.f2X,posicaoFace.f2Y - altura, largura, altura, profundidade);
////////////////DESENHA FACE////////////
    face5.desenha();
    face3.desenha();
    face1.desenha();
    face4.desenha();
    face6.desenha();
    face2.desenha();
 ////////////////DESENHA NUMERO/////////
    face5.desenha_numero5();
    face3.desenha_numero3();
    face1.desenha_numero1();
    face4.desenha_numero4();
    face6.desenha_numero6();
    face2.desenha_numero2();

   
   return [{face1,face2,face3,face4,face5,face6}];

}
///////////////////
function drawOrientation(params, posicaoFace) {
    var objectList = new Array();
    var paramsFace = agrupaPorFace(params, 'F');
    
    for (var face in paramsFace) {
        const crd = drawOrientation_identificador(face,posicaoFace)
        drawOrientation_y(crd);
        drawOrientation_x(crd);   
    }

    return objectList;

}
function drawOrientation_identificador(face,posicaoFace){
    // let baseX, baseY;
    // let redMoveToX ,redMoveToY, redLineToX, redLineToY, redLetterX, redLetterY;
    // let greenMoveToX ,greenMoveToY, greenLineToX, greenLineToY, greenLetterX, greenLetterY;
    let coordenada = new Object();

    /////Tamanho da reta
    var linewidth = 20;
    /////Espaçamento da reta com a face
    var linhapadding = 5;
    /////Espaçamento da letra x e y com a reta
    var letrapadding = 5;

    var faceInt = parseInt(face);
    switch (faceInt) {

        case 2:
            coordenada.baseX = posicaoFace.f2X;
            coordenada.baseY = posicaoFace.f2Y;
            coordenada.redMoveToX = coordenada.baseX - linhapadding;
            coordenada.redMoveToY = coordenada.baseY + linhapadding;
            coordenada.redLineToX =  coordenada.redMoveToX + linewidth;
            coordenada.redLineToY =  coordenada.redMoveToY;
            coordenada.redLetterX = coordenada.baseX + linhapadding;
            coordenada.redLetterY = coordenada.baseY + letrapadding + 10;       
            coordenada.greenMoveToX = coordenada.baseX - linhapadding;
            coordenada.greenMoveToY = coordenada.baseY + linhapadding;
            coordenada.greenLineToX =  coordenada.greenMoveToX;
            coordenada.greenLineToY =  coordenada.greenMoveToY - linewidth; 
            coordenada.greenLetterX = coordenada.baseX - letrapadding;
            coordenada.greenLetterY = coordenada.baseY + linhapadding - 10;
            break
        case 1:
        case 3:
        case 4:
        case 5:    
        case 6:
            coordenada.baseX = getX(faceInt,posicaoFace);
            coordenada.baseY = getY(faceInt,posicaoFace);
            coordenada.redMoveToX = coordenada.baseX - linhapadding;
            coordenada.redMoveToY = coordenada.baseY - linhapadding;
            coordenada.redLineToX =  coordenada.redMoveToX + linewidth;
            coordenada.redLineToY =  coordenada.redMoveToY;
            coordenada.redLetterX = coordenada.baseX + linhapadding;
            coordenada.redLetterY = coordenada.baseY - letrapadding  
            coordenada.greenMoveToX = coordenada.baseX - linhapadding;
            coordenada.greenMoveToY = coordenada.baseY - linhapadding;
            coordenada.greenLineToX =  coordenada.greenMoveToX;
            coordenada.greenLineToY =  coordenada.greenMoveToY + linewidth; 
            coordenada.greenLetterX = coordenada.baseX - letrapadding;
            coordenada.greenLetterY = coordenada.baseY + linhapadding;      
            break

    }

    return coordenada;
}
function drawOrientation_y(crd){
        
    var orientacao_Y = new ORIENTACAO_Y(crd.greenMoveToX,crd.greenMoveToY,crd.greenLineToX,crd.greenLineToY,crd.greenLetterX,crd.greenLetterY); 
    orientacao_Y.desenha_linha();
    orientacao_Y.desenha_letra();

}
function drawOrientation_x(crd){
    var orientacao_X = new ORIENTACAO_X(crd.redMoveToX,crd.redMoveToY,crd.redLineToX,crd.redMoveToY,crd.redLetterX,crd.redLetterY);
    orientacao_X.desenha_linha();
    orientacao_X.desenha_letra();
}
////////////////////////
function drawFuro(params, posicaoFace) {

    var objectList = new Array();
    var operacao;
    var operacaoEncontrada;
    var posicaoUnicaFace;
    for (var param in params) {
        if(params[param].X !== undefined && params[param].Y !== undefined){
            operacao = params[param].O;
            operacaoEncontrada = translator.find(item => item.operacao.toUpperCase() == operacao.toUpperCase());

            if(operacaoEncontrada){
                posicaoUnicaFace = getCoordinate(params[param].F, posicaoFace);
                switch (operacaoEncontrada.desenho) {

                    case "circle":
                        objectList.push(drawCircle(params[param], operacaoEncontrada, posicaoUnicaFace));
                        break
                    case "linedashed":
                        objectList.push(drawLineDashed(params[param], operacaoEncontrada, posicaoUnicaFace));
                        break
                    case "rectangle":
                        objectList.push(drawRectangle(params[param], operacaoEncontrada, posicaoUnicaFace))
                        break
                    case "sting":
                        objectList.push(drawSting(params[param], operacaoEncontrada, posicaoUnicaFace))
                        break
                
                }
            }else{
                throw "drawFuro:Operação não encontrada no translator json";
            }
        }
           
    }

    

    return objectList;


}
///////////////////
function drawCircle(param, operacaoEncontrada, posicaoUnicaFace) {
  
    if(operacaoEncontrada.diametro !== undefined && operacaoEncontrada.cor !== undefined ){

        const diametro = operacaoEncontrada.diametro;
        const cor = operacaoEncontrada.cor;
        const crd = drawCircle_identificador(param,posicaoUnicaFace);
        const furo = new CIRCULO(crd.xCircle,crd.yCircle, diametro, cor)
        furo.desenha();
        return {type:"furo",param:param,object:{X:furo.X,Y:furo.Y}};

    }else{
        console.log("drawCircle: parametro undefined, necessário 4 parâmetros") 
    }
    

    
    
 
 
   
}
function drawCircle_identificador(param,posicaoUnicaFace){
    // var xCircle;
    // var yCircle;
    var x = parseFloat(param.X);
    var y = parseFloat(param.Y);
    var faceInt = parseInt(param.F);
    var coordenada = new Object();
    switch (faceInt) {
        case 2:
            coordenada.xCircle = posicaoUnicaFace.X + (x / proporcao);
            coordenada.yCircle = posicaoUnicaFace.Y - (y / proporcao);

            break
        case 1:
        case 3:
        case 4:
        case 5:
        case 6:
            coordenada.xCircle = posicaoUnicaFace.X + (x / proporcao);
            coordenada.yCircle = posicaoUnicaFace.Y + (y / proporcao);
            break

    }
    return coordenada;
}
///////////////////
function drawLineDashed(param, operacaoEncontrada, posicaoUnicaFace) { 

    if(param.XF !== undefined && param.YF !== undefined && operacaoEncontrada.cor !== undefined && operacaoEncontrada.diametro !== undefined ){
 
        const cor = operacaoEncontrada.cor;
        const diametro = operacaoEncontrada.diametro;
        const crd = drawLineDashed_identificador(param,posicaoUnicaFace);
        const furo = new LINHAPONTILHADA(crd.xMoveToLineDashed,crd.yMoveToLineDashed, diametro, cor, crd.xLineToLineDashed, crd.yLineToLineDashed)
        furo.desenha();
        furo.desenha_linha();
        return {type:"furo",param:param,object:{X:furo.X,Y:furo.Y}};
    }else{
        console.log("drawLineDashed: parâmetro undefined, necessárío 5 parâmetros") 
    }

  
        
    


    

}
function drawLineDashed_identificador(param,posicaoUnicaFace){
    // var xMoveToLineDashed, yMoveToLineDashed, xLineToLineDashed, yLineToLineDashed;
    var x = parseFloat(param.X);
    var y = parseFloat(param.Y);
    var xf = parseFloat(param.XF);
    var yf = parseFloat(param.YF);
    var faceInt = parseInt(param.F);
    var coordenada = new Object();
    switch (faceInt) {

        case 2:
            coordenada.xMoveToLineDashed = posicaoUnicaFace.X + (x / proporcao);
            coordenada.yMoveToLineDashed = posicaoUnicaFace.Y - (y / proporcao);

            coordenada.xLineToLineDashed = coordenada.xMoveToLineDashed + (xf / proporcao);
            coordenada.yLineToLineDashed = coordenada.yMoveToLineDashed ;

            break
        case 1:
        case 3:
        case 4:
        case 5:
        case 6:
            coordenada.xMoveToLineDashed = posicaoUnicaFace.X + (x / proporcao);
            coordenada.yMoveToLineDashed = posicaoUnicaFace.Y + (y / proporcao);

            coordenada.xLineToLineDashed = coordenada.xMoveToLineDashed + (xf / proporcao);
            coordenada.yLineToLineDashed = coordenada.yMoveToLineDashed;
            break

    }
    return coordenada;
}
///////////////////
function drawRectangle(param, operacaoEncontrada, posicaoUnicaFace) {

   
    if(operacaoEncontrada.largura !== undefined && operacaoEncontrada.altura !== undefined && operacaoEncontrada.cor !== undefined ){
        
        const l_retangulo = operacaoEncontrada.largura;
        const a_retangulo = operacaoEncontrada.altura;
        const cor = operacaoEncontrada.cor;
        const crd = drawRectangle_identificador(param,posicaoUnicaFace);
        const furo = new RETANGULO(crd.xRectangle,crd.yRectangle, l_retangulo, a_retangulo, cor);
        furo.desenha();
        return {type:"furo",param:param,object:{X:furo.X,Y:furo.Y,}};

    }else{
        console.log("drawRectangle: parametro undefined, necessário 5 parâmetros") 
    }
    
    

}

function drawRectangle_identificador(param,posicaoUnicaFace){
    // var xRectangle;
    // var yRectangle;
    var x = parseFloat(param.X);
    var y = parseFloat(param.Y);
    var faceInt = parseInt(param.F);
    var coordenada = new Object();
    switch (faceInt) {
        case 2:
            coordenada.xRectangle = posicaoUnicaFace.X + (x / proporcao);
            coordenada.yRectangle = posicaoUnicaFace.Y - (y / proporcao);

            break
        case 1:
        case 3:
        case 4:
        case 5:
        case 6:
            coordenada.xRectangle = posicaoUnicaFace.X + (x / proporcao);
            coordenada.yRectangle = posicaoUnicaFace.Y + (y / proporcao);
            break

    }
    return coordenada;
}
///////////////////
function drawSting(param, operacaoEncontrada, posicaoUnicaFace) {
  
    if(operacaoEncontrada.tamanho !== undefined && operacaoEncontrada.cor !== undefined ){

        const tamanho = operacaoEncontrada.tamanho;
        const cor = operacaoEncontrada.cor;
        const crd = drawSting_identificador(param,posicaoUnicaFace);
        const furo = new STING(crd.xSting,crd.ySting, tamanho, cor)
        furo.desenha();
        return {type:"furo",param:param,object:{X:furo.X,Y:furo.Y}};

    }else{
        console.log("drawSting: parametro undefined, necessário 4 parâmetros") 
    }

    
    
    
 
 
   
}
function drawSting_identificador(param,posicaoUnicaFace){
    // var xSting;
    // var ySting;
    var x = parseFloat(param.X);
    var y = parseFloat(param.Y);
    var faceInt = parseInt(param.F);
    var coordenada = new Object();
    switch (faceInt) {
        case 2:
            coordenada.xSting = posicaoUnicaFace.X + (x / proporcao);
            coordenada.ySting = posicaoUnicaFace.Y - (y / proporcao);

            break
        case 1:
        case 3:
        case 4:
        case 5:
        case 6:
            coordenada.xSting = posicaoUnicaFace.X + (x / proporcao);
            coordenada.ySting = posicaoUnicaFace.Y + (y / proporcao);
            break

    }
    return coordenada;
}
///////////////////
function drawLine(largura, altura, profundidade, params, posicaoFace) {
    var objectList = new Array();
    let paramsGroup = new Array();

    paramsGroup = agrupaPorOperacao(params); 
    
    for (var face in paramsGroup) {
        var i = 25;
        var padding = 25;
        var posicaoUnicaFace = getCoordinate(face, posicaoFace);
        var paramsFace = paramsGroup[face];
        for (var furo in paramsFace) {
       
            var marca = getMarkPosition(face, largura, altura, profundidade, posicaoUnicaFace, i); 
            const crd_linha = drawLine_linha(marca);
         
            drawLine_linha_y(crd_linha);
            drawLine_linha_x(crd_linha);

            const crd_legenda = drawLine_legenda(marca,paramsFace[furo],face);
        
            drawLine_legenda_y(crd_legenda);
            drawLine_legenda_x(crd_legenda);
    
            i += padding;
    
        }
    }
    


    ctx.restore();
    
    return objectList;
}
function drawLine_linha(marca){
    // let moveToX1 ,moveToY1, lineToX1, lineToY1;
    // let moveToX2 ,moveToY2, lineToX2, lineToY2;
    var coordenada = new Object();
    coordenada.moveToX1 = marca.xPosition1; 
    coordenada.moveToY1 = marca.yPosition1;
    coordenada.lineToX1 = marca.xPositionLineTo1;
    coordenada.lineToY1 = marca.yPositionLineTo1;

    coordenada.moveToX2 = marca.xPosition2; 
    coordenada.moveToY2 = marca.yPosition2;
    coordenada.lineToX2 = marca.xPositionLineTo2;
    coordenada.lineToY2 = marca.yPositionLineTo2;

    return coordenada;

}
function drawLine_legenda(marca,paramsFuro,face){
    // let linhaY_legenda_posicaoY ,linhaY_legenda_posicaoX;
    // let linhaX_legenda_posicaoY ,linhaX_legenda_posicaoX;
    let operacao = paramsFuro[0].O;
    var coordenada = new Object();
    const operacaoTabela = table.find(element => element.operacao.toUpperCase() == operacao.toUpperCase());
    if(operacaoTabela){
        coordenada.linha_legenda = operacaoTabela.subtitle;
        coordenada.linhaY_legenda_posicaoY = face == 2 ? marca.yPosition1 + 15 : marca.yPosition1 - 15;
        coordenada.linhaY_legenda_posicaoX = marca.xPosition1;
        coordenada.linhaX_legenda_posicaoY = marca.yPosition2;
        coordenada.linhaX_legenda_posicaoX = marca.xPosition2 - 15;
        return coordenada;
    }   
    else{
        throw "drawLine_legenda:Operação não encontrada na tabela";
    }
     
}
function drawLine_linha_x(crd_linha){
    var linha_X = new LINHA(crd_linha.moveToX2,crd_linha.moveToY2,crd_linha.lineToX2,crd_linha.lineToY2);
    linha_X.desenha();
}
function drawLine_linha_y(crd_linha){
    var linha_Y = new LINHA(crd_linha.moveToX1,crd_linha.moveToY1,crd_linha.lineToX1,crd_linha.lineToY1);
    linha_Y.desenha();

}
function drawLine_legenda_x(crd_legenda){
    var linha_legenda_X = new LINHA_LEGENDA(crd_legenda.linhaX_legenda_posicaoX,crd_legenda.linhaX_legenda_posicaoY,crd_legenda.linha_legenda);
    linha_legenda_X.desenha();
}
function drawLine_legenda_y(crd_legenda){
    var linha_legenda_Y = new LINHA_LEGENDA(crd_legenda.linhaY_legenda_posicaoX,crd_legenda.linhaY_legenda_posicaoY,crd_legenda.linha_legenda);
    linha_legenda_Y.desenha();

}
/////////////////////////
function drawMarcacaoFuro(largura, altura, profundidade, params, posicaoFace) {
    var objectList = new Array();
    var paramsGroup;
    paramsGroup = agrupaPorOperacao(params); 
     
    for (var face in paramsGroup) {
        var i = 25
        var padding = 25;
        var posicaoUnicaFace = getCoordinate(face, posicaoFace);
        for (var furo in paramsGroup[face]) {
            var marca = getMarkPosition(face, largura, altura, profundidade, posicaoUnicaFace, i);
          
            //////////////////////////////Desenha marca no inicio e final dos eixo//////////////////////////
            const crd_extremidade = drawMarcacaoFuro_extremidade(marca);
            drawMarcacaoFuro_extremidade_y(crd_extremidade);
            drawMarcacaoFuro_extremidade_x(crd_extremidade);     
           //////////////////////////////////////////////FIM////////////////////////////////////////////////////
            drawMarcacaoFuro_y(marca,paramsGroup[face][furo],face);
            drawMarcacaoFuro_x(marca,paramsGroup[face][furo]);
           
       
            i += padding;

        }

    }
    
    
    return objectList;

}
function drawMarcacaoFuro_extremidade(marca){
        
    // var ymoveToX1, ymoveToY1, ylineToX1, ylineToY1;
    // var xmoveToX1, xlineToX1, xmoveToY1, xlineToY1;

    var coordenada = new Object();
    coordenada.ymoveToX1 = marca.xPosition1;
    coordenada.ymoveToY1 = marca.yPosition1;
    coordenada.ylineToX1 = marca.xPositionLineTo1;
    coordenada.ylineToY1 = marca.yPositionLineTo1;

    coordenada.xmoveToX1 = marca.xPosition2;
    coordenada.xmoveToY1 = marca.yPosition2;
    coordenada.xlineToX1 = marca.xPositionLineTo2;
    coordenada.xlineToY1 = marca.yPositionLineTo2;

    return coordenada;
   
}
function drawMarcacaoFuro_extremidade_y(crd_extremidade){
    const marcacao_y_extremidade = new MARCACAO_Y(crd_extremidade.ymoveToX1,crd_extremidade.ymoveToY1,crd_extremidade.ylineToX1,crd_extremidade.ylineToY1);
    marcacao_y_extremidade.desenha_marcacao_inicio();
    marcacao_y_extremidade.desenha_marcacao_final();
}
function drawMarcacaoFuro_extremidade_x(crd_extremidade){
    const marcacao_x_extremidade = new MARCACAO_X(crd_extremidade.xmoveToX1,crd_extremidade.xmoveToY1,crd_extremidade.xlineToX1,crd_extremidade.xlineToY1);
    marcacao_x_extremidade.desenha_marcacao_inicio();
    marcacao_x_extremidade.desenha_marcacao_final();
}
function drawMarcacaoFuro_identificador_y(marca,furoObject,face){
    // var moveToX1, lineToX1, moveToY1, lineToY1;
    var coordenada = new Object();
    if(face == 2){
        coordenada.moveToX1 = marca.xPosition1;
        coordenada.lineToX1 = marca.xPosition1;
        coordenada.moveToY1 = marca.yPosition1 - furoObject.Y / proporcao;
        coordenada.lineToY1 = marca.yPosition1 - furoObject.Y / proporcao;
    }else{
        coordenada.moveToX1 = marca.xPosition1;
        coordenada.lineToX1 = marca.xPosition1;
        coordenada.moveToY1 = marca.yPosition1 + furoObject.Y / proporcao;
        coordenada.lineToY1 = marca.yPosition1 + furoObject.Y / proporcao;
    }
    return coordenada;
}
function drawMarcacaoFuro_identificador_x(marca,furoObject){
    var coordenada = new Object();

    coordenada.moveToX2 = marca.xPosition2 + furoObject.X / proporcao;
    coordenada.lineToX2 = marca.xPosition2 + furoObject.X / proporcao;
    coordenada.moveToY2 = marca.yPosition2;
    coordenada.lineToY2 = marca.yPosition2;

    return coordenada;
}
function drawMarcacaoFuro_y(marca,furoCollection,face){
    let yList = new Array();
    for (var item in furoCollection) {
        var furoObject = furoCollection[item];
        const crd_y = drawMarcacaoFuro_identificador_y(marca,furoObject,face);
        if(!(yList.includes(furoObject.Y))){
            const marcacao_y = new MARCACAO_Y(crd_y.moveToX1,crd_y.moveToY1,crd_y.lineToX1,crd_y.lineToY1);
            marcacao_y.desenha();
            yList.push(furoObject.Y);
        }   
    }
   
}
function drawMarcacaoFuro_x(marca,furoCollection){
    let xList = new Array();
    for (var item in furoCollection) {
        var furoObject = furoCollection[item];
        const crd_x = drawMarcacaoFuro_identificador_x(marca,furoObject);
        if(!(xList.includes(furoObject.X))){
            const marcacao_x = new MARCACAO_X(crd_x.moveToX2,crd_x.moveToY2,crd_x.lineToX2,crd_x.lineToY2);
            marcacao_x.desenha();
            xList.push(furoObject.X);      
        }

    }
 
}
////////////////////////
function drawMarcacaoCoordenada(largura, altura, profundidade, params, posicaoFace) {
    var objectList = new Array();   
    var paramsGroup;

    paramsGroup = agrupaPorOperacao(params); 
   

    for (var face in paramsGroup) {

        var i = 25
        var padding = 25;
        var posicaoUnicaFace = getCoordinate(face, posicaoFace);
        

        for (var furo in paramsGroup[face]) {

            var marca = getMarkPosition(face, largura, altura, profundidade, posicaoUnicaFace, i);
            var paramObject = paramsGroup[face][furo];
            var paramObjectX = ordenaX(paramObject);
            var paramObjectY = ordenaY(paramObject); 
            
            drawMarcacaoCoordenada_y(marca, paramObjectY, face);
            drawMarcacaoCoordenada_x(marca, paramObjectX, face);

    
            i += padding;

        }

    }

    return objectList;

}
function drawMarcacaoCoordenada_x(marca, paramObjectX, face){
    let xList = new Array();
    let oppositeY = false;
    for (var k = 0; k < paramObjectX.length; k++) {      
        var number2, numberToX2, numberToY2;
        var paddingNumberY = 5;
        if(paramObjectX[k].X !== undefined){   
            if(k > 0){
                var proximity = paramObjectX[k].X - paramObjectX[k-1].X;
                
                if (proximity != 0){
                    
                    if(Math.abs(proximity) < 40){
                    
                        if(oppositeY){
                            paddingNumberY = 5;
                            oppositeY = !oppositeY;
                    
                        }else{
                            paddingNumberY = -10;
                            oppositeY = !oppositeY;
                        
                        }
                    }else{
                        paddingNumberY = 5;
                        oppositeY = false;
                    }   
                }
                    
            } 
            


            number2 = paramObjectX[k].X;
            numberToX2 = marca.xPosition2 + paramObjectX[k].X / proporcao;
            numberToY2 = marca.yPosition2 - paddingNumberY;


            if(!(xList.includes(paramObjectX[k].X))){
                var marcacao_coordenadaX = new MARCACAO_COORDENADA(numberToX2,numberToY2,numberToX2,numberToY2,number2);
                marcacao_coordenadaX.desenha_x();
                xList.push(paramObjectX[k].X);
            
            }
        } 
    }
}
function drawMarcacaoCoordenada_y(marca, paramObjectY, face){
    let yList = new Array();
    let oppositeX = false;
    for (var j = 0; j < paramObjectY.length; j++) {
                
        var number1, numberToX1, numberToY1;        
        var paddingNumberX = 5;
        if(paramObjectY[j].Y !== undefined){
            
            if(j > 0){
                var proximity = paramObjectY[j].Y - paramObjectY[j-1].Y;
            
                if (proximity != 0){
                    
                    if(Math.abs(proximity) < 40){
        
                        if(oppositeX){
                            paddingNumberX = 5;
                            oppositeX = !oppositeX;
                    
                    
                        }else{
                            paddingNumberX = -10;
                            oppositeX = !oppositeX;
                        
                        }
                    }else{
                        paddingNumberX = 5;
                        oppositeX = false;
                    
                    }   
                }
                    
            } 
            
            
            if(face == 2){
                number1 = paramObjectY[j].Y;
                numberToX1 = marca.xPosition1 - paddingNumberX;
                numberToY1 = marca.yPosition1 - paramObjectY[j].Y / proporcao;
            }else{
            
                number1 = paramObjectY[j].Y;
                numberToX1 = marca.xPosition1 - paddingNumberX ;
                numberToY1 = marca.yPosition1 + paramObjectY[j].Y / proporcao;
            }
            
            if(!(yList.includes(paramObjectY[j].Y))){
                var marcacao_coordenadaY = new MARCACAO_COORDENADA(numberToX1,numberToY1,numberToX1,numberToY1,number1);
                marcacao_coordenadaY.desenha_y();
                        
                yList.push(paramObjectY[j].Y);
                
            }
        }
    }
}
////////////////////////

function drawMarcacaoDistancia(largura, altura, profundidade, params, posicaoFace) {
    var objectList = new Array();    
    var paramsGroup = agrupaPorOperacao(params); 

    for (var face in paramsGroup) {
        var i = 25
        var padding = 25;
        var posicaoUnicaFace = getCoordinate(face, posicaoFace);


        for (var furo in paramsGroup[face]) {

            ///Posiçao inicial de X e Y para desenhar as marcas
            var marca = getMarkPosition(face, largura, altura, profundidade, posicaoUnicaFace, i);
            var paramObject1 = [...paramsGroup[face][furo]];
            var paramObject2 = [...paramsGroup[face][furo]];      
            var paramObjectX = ordenaX(paramObject1);
            var paramObjectY = ordenaY(paramObject2); 
                
            drawMarcacaoDistancia_y(marca, paramObjectY, face);
            drawMarcacaoDistancia_x(marca, paramObjectX, face);
       
            i += padding;

        }

    }
    
    return objectList;

}
function drawMarcacaoDistancia_y(marca, paramObjectY, face){
    let yList = new Array();
    var numberToX1 = marca.xPosition1;
    var numberToY1 = marca.yPosition1;
    for (var j = 0; j <= paramObjectY.length; j++) {
        var diff1, translateX1, translateY1;

        if(j == 0){
            diff1 = paramObjectY[j].Y;
        }else if (j < paramObjectY.length){
            diff1 = paramObjectY[j].Y - paramObjectY[j - 1].Y;
        }else{
            diff1 = paramObjectY[j - 1].A - paramObjectY[j - 1].Y;
        }

        if(face == 2 ){
            numberToY1 -= (diff1 / proporcao);
            translateX1 = numberToX1 - 5;
            translateY1 = numberToY1 + ((diff1 / 2) / proporcao);
        }else{
         
            numberToY1 += (diff1 / proporcao);
            translateX1 = numberToX1 - 5;
            translateY1 = numberToY1 - ((diff1 / 2) / proporcao);
        }            

        if(j < paramObjectY.length){
            if(!(yList.includes(paramObjectY[j].Y))){
                var marcacao_coordenadaY = new MARCACAO_COORDENADA(translateX1,translateY1,translateX1,translateY1,diff1);
                marcacao_coordenadaY.desenha_y();
                yList.push(paramObjectY[j].Y);
            }
        }else{
            var marcacao_coordenadaY = new MARCACAO_COORDENADA(translateX1,translateY1,translateX1,translateY1,diff1);
            marcacao_coordenadaY.desenha_y();
            yList.push(diff1);
           
        }
        
    }

}
function drawMarcacaoDistancia_x(marca, paramObjectX, face){
    var numberToX2 = marca.xPosition2;
    var numberToY2 = marca.yPosition2;
    let xList = new Array();
    

    for (var k = 0; k <= paramObjectX.length; k++) {
        var diff2, translateX2, translateY2;

        if(k == 0){
            diff2 = paramObjectX[k].X;
        }else if (k < paramObjectX.length){
            diff2 = paramObjectX[k].X - paramObjectX[k - 1].X;
        }else{
            if(face == 3 || face == 4){
                diff2 = paramObjectX[k - 1].P - paramObjectX[k - 1].X;
            }else{
                diff2 = paramObjectX[k - 1].L - paramObjectX[k - 1].X;
            }
            
        }
            numberToX2 += (diff2 / proporcao);
            translateX2 = numberToX2 - ((diff2 / 2) / proporcao);
            translateY2 = numberToY2 - 5;
        

        if(k < paramObjectX.length){
           
            if(!(xList.includes(paramObjectX[k].X))){
                var marcacao_coordenadaX = new MARCACAO_COORDENADA(translateX2,translateY2,translateX2,translateY2,diff2);
                marcacao_coordenadaX.desenha_x();
                xList.push(paramObjectX[k].X);
               
            }
        }else{
            if(diff2 != 0){
                var marcacao_coordenadaX = new MARCACAO_COORDENADA(translateX2,translateY2,translateX2,translateY2,diff2);
                marcacao_coordenadaX.desenha_x();
                xList.push(diff2);
            }
                
            
        }
        
    }

}
////////////////////////
function drawMarcacaoLegenda(largura, altura, profundidade, params, posicaoFace) {
    var objectList = new Array();    
   
    for (var item in params) {
        var furoObject = params[item];
        var face = params[item].F
        var posicaoUnicaFace = getCoordinate(face, posicaoFace);
        const crd = drawMarcacaoLegenda_identificador(face,posicaoUnicaFace,furoObject,)
        var marcacao_legenda = new MARCACAO_LEGENDA(crd.xLegenda,crd.yLegenda,crd.xLegenda,crd.yLegenda,crd.legenda,crd.top);
        marcacao_legenda.desenha();    
    }

   
    return objectList;
}
function drawMarcacaoLegenda_identificador(face,posicaoUnicaFace,furoObject){
    var coordenada = new Object();
    const operacaoTabela = table.find(element => element.operacao.toUpperCase() == furoObject.O.toUpperCase());
    const operacaoEncontrada = translator.find(item => item.operacao.toUpperCase() == furoObject.O.toUpperCase());

    var faceInt = parseInt(face) ;        
    if(operacaoTabela){
        coordenada.legenda = operacaoTabela.subtitle;
         switch (faceInt) {
            case 2:
                coordenada.xLegenda = posicaoUnicaFace.X + (furoObject.X / proporcao);
                coordenada.yLegenda = posicaoUnicaFace.Y - (furoObject.Y / proporcao);
        
                break
            case 1:
            case 3:
            case 4:
            case 5:
            case 6:
                coordenada.xLegenda = posicaoUnicaFace.X + (furoObject.X / proporcao);
                coordenada.yLegenda = posicaoUnicaFace.Y + (furoObject.Y / proporcao);  
                break
    
        }
        switch (operacaoEncontrada.desenho) {
            case 'circle':
                coordenada.top = operacaoEncontrada.diametro;
                break;
            case 'linedashed':
                coordenada.top = operacaoEncontrada.diametro;
                break;
            case 'rectangle':
                coordenada.top = operacaoEncontrada.altura * 0.60;
                break;
            case 'sting':
                coordenada.top = operacaoEncontrada.tamanho * 0.80;
                break;
        }
        return coordenada;
    }
    throw "drawMarcacaoLegenda: operação nao encontrada na tabela"; 
    
   
}
////////////////////////
function drawTable(posicaoFace) {
    
 
    var objectList = new Array(); 
    
    ctx.font = "12px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    
    var xTable = 50;
    var yTable = posicaoFace.f3Y;

    var x_titulo = xTable;
    var y_titulo = yTable;

    var x_subtitulo = xTable;
    var y_subtitulo = yTable + 20;

    var texto_titulo = nameFace;
    var tabela_titulo = new TABELA_TITULO(x_titulo,y_titulo,texto_titulo);

    tabela_titulo.desenha();
    
    var texto_subtitulo = larguraFace+"X"+alturaFace+"X"+profundidadeFace;
    var tabela_subtitulo = new TABELA_TITULO(x_subtitulo,y_subtitulo,texto_subtitulo);

    tabela_subtitulo.desenha();

    var i = 40;
    for (var t in table) {
        var operacaoTabela = translator.find(item => item.operacao.toUpperCase() == table[t].operacao.toUpperCase());
        if(operacaoTabela){
            var legenda_item = table[t].subtitle;
            var texto_item = ": " + table[t].operacao;
            var x_item = x_subtitulo;
            var y_item = y_subtitulo + i;
            var cor_item = operacaoTabela.cor;
            var tabela_item = new TABELA_ITEM(x_item,y_item,texto_item,legenda_item,cor_item);
            tabela_item.desenha()
            i += 20;
        }else{
            throw "drawTable: operação não encontrada no translator.js";
        }
       
    }
  
    return objectList;

}

