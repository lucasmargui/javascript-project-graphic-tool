


function drawCore(filtros, dados) {
  var posicaoFace = new Position();
  var largura = larguraFace;
  var altura = alturaFace;
  var profundidade = profundidadeFace;
  var larguraProporcao;
  var alturaProporcao;
  var profundidadeProporcao;
  var lista_de_parametros = dados ? dados : dadosBase;

  larguraProporcao = parseFloat(largura / proporcao);
  alturaProporcao = parseFloat(altura / proporcao);
  profundidadeProporcao = parseFloat(profundidade / proporcao);

  try {
      posicaoFace = configDraw(larguraProporcao, alturaProporcao);
  } catch (e) {
      throw e;
  }


  for (var filtro of Object.keys(filtros)) {
      switch (filtros[filtro]) {
          case "face":
              drawFace(larguraProporcao, alturaProporcao, profundidadeProporcao, posicaoFace);
              break;
          case "furo":
              furacaoWidgets = drawFuro(lista_de_parametros, posicaoFace);
              break;
          case "line":
              drawLine(larguraProporcao, alturaProporcao, profundidadeProporcao, lista_de_parametros, posicaoFace);
              break;
          case "tabela":
              drawTable(posicaoFace);
              break;
          case "orientation":
              drawOrientation(lista_de_parametros, posicaoFace);
              break;
          case "marcacaoFuro":
              drawMarcacaoFuro(larguraProporcao, alturaProporcao, profundidadeProporcao, lista_de_parametros, posicaoFace);
              break;
          case "marcacaoCoordenada":
              drawMarcacaoCoordenada(larguraProporcao, alturaProporcao, profundidadeProporcao, lista_de_parametros, posicaoFace);
              break;
          case "marcacaoDistancia":
              drawMarcacaoDistancia(larguraProporcao, alturaProporcao, profundidadeProporcao, lista_de_parametros, posicaoFace);
              break;
          case "marcacaoLegenda":
              drawMarcacaoLegenda(larguraProporcao, alturaProporcao, profundidadeProporcao, lista_de_parametros, posicaoFace);
              break;
          default:
              break;
      }
  }

  return furacaoWidgets;
}

function drawCoreNoParam() {
  var largura = larguraFace / proporcao;
  var altura = alturaFace / proporcao;
  var profundidade = profundidadeFace / proporcao;

  try {
      configDraw(largura, altura);
      drawFace(largura, altura, profundidade);
  } catch (error) {
      alert("Erro: " + error);
  }

  return [];
}
