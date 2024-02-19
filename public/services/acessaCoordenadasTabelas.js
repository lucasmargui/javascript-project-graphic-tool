////Retorna filtros selecionados
function getFiltros() {
  var filtros = new Array();

  try {
    var data = serialize(form);
    var res = data.split("&");
    for (item in res) {
      var filtro = res[item].split("=");
      filtros.push(filtro[1]);
    }
  } catch (e) {
    throw "Erro getFiltros: " + e
  }



  return filtros;

}
////Retorna coordenada de uma face
function getCoordinate(face , posicaoFace) {
    var coordinate = Object();
  
    switch (parseInt(face)) {
  
      case 1:
  
        coordinate.X = posicaoFace.f1X;
        coordinate.Y = posicaoFace.f1Y;
  
        break
      case 2:
  
        coordinate.X = posicaoFace.f2X;
        coordinate.Y = posicaoFace.f2Y;
  
        break
      case 3:
  
        coordinate.X = posicaoFace.f3X;
        coordinate.Y = posicaoFace.f3Y;
  
        break
      case 4:
  
        coordinate.X = posicaoFace.f4X;
        coordinate.Y = posicaoFace.f4Y;
  
        break
      case 5:
  
        coordinate.X = posicaoFace.f5X;
        coordinate.Y = posicaoFace.f5Y;
  
        break
      case 6:
  
        coordinate.X = posicaoFace.f6X;
        coordinate.Y = posicaoFace.f6Y;
  
        break
  
    }
  
    return coordinate;
  }
////Retorna coordenada para marcação, numero ou legenda
function getMarkPosition(face, largura, altura, profundidade, posicaoUnicaFace, i) {

  var marca = new PositionMark();

  switch (parseInt(face)) {


    case 1:
      marca.xPosition1 = posicaoUnicaFace.X + largura + i;
      marca.yPosition1 = posicaoUnicaFace.Y
      marca.xPositionLineTo1 = marca.xPosition1;
      marca.yPositionLineTo1 = marca.yPosition1 + altura;

      marca.xPosition2 = posicaoUnicaFace.X;
      marca.yPosition2 = posicaoUnicaFace.Y + altura + i;
      marca.xPositionLineTo2 = marca.xPosition2 + largura;
      marca.yPositionLineTo2 = marca.yPosition2 ;

      break
    case 2:
      marca.xPosition1 = posicaoUnicaFace.X + largura + i;
      marca.yPosition1 = posicaoUnicaFace.Y;
      marca.xPositionLineTo1 = marca.xPosition1;
      marca.yPositionLineTo1 = marca.yPosition1 - altura;

      marca.xPosition2 = posicaoUnicaFace.X;
      marca.yPosition2 = posicaoUnicaFace.Y + i;
      marca.xPositionLineTo2 = marca.xPosition2 + largura;
      marca.yPositionLineTo2 = marca.yPosition2;
      break
    case 3:
      marca.xPosition1 = posicaoUnicaFace.X - i;
      marca.yPosition1 = posicaoUnicaFace.Y;
      marca.xPositionLineTo1 = marca.xPosition1;
      marca.yPositionLineTo1 = marca.yPosition1 + altura;

      marca.xPosition2 = posicaoUnicaFace.X;
      marca.yPosition2 = posicaoUnicaFace.Y + altura + i;
      marca.xPositionLineTo2 = marca.xPosition2 + profundidade;
      marca.yPositionLineTo2 = marca.yPosition2;
      break
    case 4:
      marca.xPosition1 = posicaoUnicaFace.X + profundidade + i;
      marca.yPosition1 = posicaoUnicaFace.Y
      marca.xPositionLineTo1 = marca.xPosition1;
      marca.yPositionLineTo1 = marca.yPosition1 + altura;

      marca.xPosition2 = posicaoUnicaFace.X;
      marca.yPosition2 = posicaoUnicaFace.Y + altura + i;
      marca.xPositionLineTo2 = marca.xPosition2 + profundidade;
      marca.yPositionLineTo2 = marca.yPosition2;
      break
    case 5:
      marca.xPosition1 = posicaoUnicaFace.X + largura + i;
      marca.yPosition1 = posicaoUnicaFace.Y
      marca.xPositionLineTo1 = marca.xPosition1;
      marca.yPositionLineTo1 = marca.yPosition1 + profundidade;

      marca.xPosition2 = posicaoUnicaFace.X;
      marca.yPosition2 = posicaoUnicaFace.Y - i;
      marca.xPositionLineTo2 = marca.xPosition2 + largura;
      marca.yPositionLineTo2 = marca.yPosition2 ;

      break
    case 6:
      marca.xPosition1 = posicaoUnicaFace.X + largura + i;
      marca.yPosition1 = posicaoUnicaFace.Y
      marca.xPositionLineTo1 = marca.xPosition1;
      marca.yPositionLineTo1 = marca.yPosition1 + profundidade;

      marca.xPosition2 = posicaoUnicaFace.X;
      marca.yPosition2 = posicaoUnicaFace.Y + profundidade + i;
      marca.xPositionLineTo2 = marca.xPosition2 + largura;
      marca.yPositionLineTo2 = marca.yPosition2 ;
      break

  }

  return marca;
}

function getX(key, posicaoFace){
  switch (parseInt(key)) {
      case 1:
          return posicaoFace.f1X
          break;
      case 3:
          return posicaoFace.f3X
          break;
      case 4:
          return posicaoFace.f4X
          break;
      case 5:
          return posicaoFace.f5X
          break;
      case 6:
          return posicaoFace.f6X
          break;
  }
}
function getY(key, posicaoFace){
  switch (parseInt(key)) {
      case 1:
          return posicaoFace.f1Y
          break;
      case 3:
          return posicaoFace.f3Y
          break;
      case 4:
          return posicaoFace.f4Y
          break;
      case 5:
          return posicaoFace.f5Y
          break;
      case 6:
          return posicaoFace.f6Y
          break;
  }
}