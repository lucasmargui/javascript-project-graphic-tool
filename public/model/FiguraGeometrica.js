class Position {
  constructor(fX,fY, f1X, f1Y, f2X, f2Y, f3X, f3Y, f4X, f4Y, f5X, f5Y, f6X, f6Y) {
    this.fX = fX;
    this.fY = fY;
    this.f1X = f1X;
    this.f1Y = f1Y;
    this.f2X = f2X;
    this.f2Y = f2Y;
    this.f3X = f3X;
    this.f3Y = f3Y;
    this.f4X = f4X;
    this.f4Y = f4Y;
    this.f5X = f5X;
    this.f5Y = f5Y;
    this.f6X = f6X;
    this.f6Y = f6Y;
  }
}

class PositionMark {
constructor(xPosition1, yPosition1, xPositionLineTo1, yPositionLineTo1, xPosition2, yPosition2, xPositionLineTo2, yPositionLineTo2) {
  /////////////////////POSICAO Y//////////////////////////////
  this.xPosition1 = xPosition1;
  this.yPosition1 = yPosition1; 
  this.xPositionLineTo1 = xPositionLineTo1;
  this.yPositionLineTo1 = yPositionLineTo1; 
  /////////////////////POSICAO X//////////////////////////////
  this.xPosition2 = xPosition2;
  this.yPosition2 = yPosition2; 
  this.xPositionLineTo2 = xPositionLineTo2;
  this.yPositionLineTo2 = yPositionLineTo2; 
  }
}

class FACE {
  constructor(x, y, largura, altura, profundidade) {
    this.X = x;
    this.Y = y;
    this.largura = largura;
    this.altura = altura;
    this.profundidade = profundidade;

  }

  desenha() {
    ctx.strokeRect(this.X, this.Y, this.largura, this.altura);
  }
}
class FACE_NUMERO extends FACE {
  constructor(x, y, largura, altura, profundidade) {
    super(x, y, largura, altura, profundidade);
  }

  desenha_numero1() {
    ctx.save();
    let fontsize = 30/proporcao;
    ctx.font = fontsize+"px Verdana";
    ctx.fillStyle = "rgba(0, 0, 0, 0.20)";
    let number1X = this.X + this.largura / 2;
    let number1Y = this.Y;
    ctx.fillText("1", number1X, number1Y);
    ctx.restore();
  }
  desenha_numero2() {
    ctx.save();
    let fontsize = 30/proporcao;
    ctx.font = fontsize+"px Verdana";
    ctx.fillStyle = "rgba(0, 0, 0, 0.20)";
    let number2X = this.X + this.largura / 2;
    let number2Y = this.Y;
    ctx.fillText("2", number2X, number2Y);
    ctx.restore();
  }
  desenha_numero3() {
    ctx.save();
    let fontsize = 30/proporcao;
    ctx.font = fontsize+"px Verdana";
    ctx.fillStyle = "rgba(0, 0, 0, 0.20)";
    let number3X = this.X + this.profundidade;
    let number3Y = this.Y + this.altura / 2;
    ctx.fillText("3", number3X, number3Y);
   
    ctx.restore();
  }
  desenha_numero4() {
    ctx.save();
    let fontsize = 30/proporcao;
    ctx.font = fontsize+"px Verdana";
    ctx.fillStyle = "rgba(0, 0, 0, 0.20)";
    let number4X = this.X - 15;
    let number4Y = this.Y + this.altura / 2;
    ctx.fillText("4", number4X, number4Y);
    ctx.restore();
  }
  desenha_numero5() {
    ctx.save();
    let fontsize = 30/proporcao;
    ctx.font = fontsize+"px Verdana";
    ctx.fillStyle = "rgba(0, 0, 0, 0.20)";
    let number5X = this.X + this.largura / 2;
    let number5Y = this.Y;
    ctx.fillText("5", number5X, number5Y);
    ctx.restore();
  }
  desenha_numero6() {
    ctx.save();
    let fontsize = 30/proporcao;
    ctx.font = fontsize+"px Verdana";
    ctx.fillStyle = "rgba(0, 0, 0, 0.20)";
    let number6X = this.X + this.largura / 2;
    let number6Y = this.Y;
    ctx.fillText("6", number6X, number6Y);
    ctx.restore();
  }
}
class CIRCULO {
  constructor(x, y, diametro, cor) {
    this.X = x;
    this.Y = y;
    this.diametro = diametro;
    this.cor = cor;
  }
  desenha() {
    ctx.save();
    ctx.strokeStyle = this.cor;
    ctx.beginPath();
    ctx.arc(this.X, this.Y, this.diametro - 1.5, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "rgba(0, 0, 0, 0.20)";
    ctx.arc(this.X, this.Y, this.diametro, 0, 2.5 * Math.PI);
    ctx.stroke();
    ctx.restore();
  }
}
class LINHAPONTILHADA extends CIRCULO {
  constructor(x, y, diametro, cor, xf, yf) {
    super(x, y, diametro, cor)
    this.XF = xf;
    this.YF = yf;
  }
  desenha_linha() {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "rgba(0, 0, 0)";
    ctx.setLineDash([15, 15]);
    ctx.lineWidth = 0.80;
    ctx.moveTo(this.X, this.Y);
    ctx.lineTo(this.XF, this.YF);
    ctx.stroke();
    ctx.restore();
  }
}
class RETANGULO {
  constructor(x, y, largura, altura, cor) {
    this.X = x;
    this.Y = y;
    this.largura = largura;
    this.altura = altura;
    this.cor = cor;
  }
  desenha() {
    ctx.save();
    ctx.strokeStyle = this.cor;
    ctx.beginPath();
    ctx.strokeRect(this.X - (this.largura / 2.4), this.Y - (this.altura / 2.4), this.largura*0.85, this.altura*0.85);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = "rgba(0, 0, 0, 0.20)";
    ctx.beginPath();
    ctx.strokeRect(this.X - (this.largura / 2), this.Y - (this.altura / 2), this.largura, this.altura);
    ctx.stroke();
    ctx.restore();

  }
}
class STING {
  constructor(x, y, tamanho, cor) {
    this.X = x;
    this.Y = y;
    this.tamanho = tamanho;
    this.cor = cor;
  }
  desenha() {
    ctx.save();
    ctx.fillStyle = this.cor;
    ctx.textAlign = 'center';
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.40)';
    ctx.font = this.tamanho+'px Arial';
    ctx.fillText('X', this.X, this.Y);
    ctx.strokeText('X', this.X, this.Y);
  

    ctx.restore();
  
  }
}
class LINHA {
  constructor(xInicio, yInicio, xFinal, yFinal) {
    this.xInicio = xInicio;
    this.yInicio = yInicio;
    this.xFinal = xFinal;
    this.yFinal = yFinal;
  }

  desenha() {
    ctx.save();
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineWidth = 0.80;
    ctx.moveTo(this.xInicio, this.yInicio);
    ctx.lineTo(this.xFinal, this.yFinal);
    ctx.stroke();
    ctx.restore();
  }

}
class LINHA_LEGENDA {
  constructor(x, y, legenda) {
    this.X = x;
    this.Y = y;
    this.legenda = legenda;
  }
  desenha() {
    ctx.save();
    ctx.fillStyle = "black";
    ctx.font = "9px Arial";
    ctx.textAlign = "center";
    ctx.fillText(this.legenda, this.X, this.Y);
    ctx.restore();

  }
}
class TABELA {
  constructor(x, y, texto) {
    this.X = x;
    this.Y = y;
    this.texto = texto;
  }

}
class TABELA_TITULO extends TABELA {
  constructor(x, y, texto) {
    super(x, y, texto)
  }

  desenha() {
    ctx.fillText(this.texto, this.X, this.Y);
  }
}
class TABELA_ITEM extends TABELA {
  constructor(x, y, texto, legenda, cor) {
    super(x, y, texto);
    this.cor = cor;
    this.legenda = legenda;
  }

  desenha() {
    ctx.save();
    ctx.font = "16px Arial";
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.20)';
    ctx.fillStyle = this.cor;
    ctx.fillText(this.legenda, this.X, this.Y);
    ctx.lineWidth = 1;
    ctx.strokeText(this.legenda, this.X, this.Y);
    ctx.restore();
    ctx.fillText(" " + this.texto, this.X + 11, this.Y);

  }
}
class ORIENTACAO {
  constructor(xInicio, yInicio, xFinal, yFinal) {
    this.xInicio = xInicio;
    this.yInicio = yInicio;
    this.xFinal = xFinal;
    this.yFinal = yFinal;
  }

}
class ORIENTACAO_X extends ORIENTACAO {
  constructor(xInicio, yInicio, xFinal, yFinal, letraX, letraY) {
    super(xInicio, yInicio, xFinal, yFinal);
    this.letraX = letraX;
    this.letraY = letraY;
  }
  desenha_linha() {
    ctx.save();
    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(this.xInicio, this.yInicio);
    ctx.lineTo(this.xFinal, this.yFinal);
    ctx.stroke();
    ctx.restore();
  }
  desenha_letra() {
    ctx.save();
    ctx.textAlign = "center";
    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.strokeStyle = "red";
    ctx.fillText("X", this.letraX, this.letraY);
    ctx.restore();
  }

}
class ORIENTACAO_Y extends ORIENTACAO {
  constructor(xInicio, yInicio, xFinal, yFinal, letraX, letraY) {
    super(xInicio, yInicio, xFinal, yFinal);
    this.letraX = letraX;
    this.letraY = letraY;
  }
  desenha_linha() {
    ctx.save();
    ctx.font = "15px Arial";
    ctx.fillStyle = "green";
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(this.xInicio, this.yInicio);
    ctx.lineTo(this.xFinal, this.yFinal);
    ctx.stroke();
    ctx.restore();
  }
  desenha_letra() {
    ctx.save();
    ctx.textAlign = "center";
    ctx.font = "15px Arial";
    ctx.fillStyle = "green";
    ctx.strokeStyle = "green";
    ctx.translate(this.letraX, this.letraY);
    ctx.rotate(-0.5 * Math.PI);
    ctx.fillText("Y", 0, 0);
    ctx.restore();
  }

}
class MARCACAO {
  constructor(xInicio, yInicio, xFinal, yFinal) {
    this.xInicio = xInicio;
    this.yInicio = yInicio;
    this.xFinal = xFinal;
    this.yFinal = yFinal;
  }


}
class MARCACAO_X extends MARCACAO {
  constructor(xInicio, yInicio, xFinal, yFinal) {
    super(xInicio, yInicio, xFinal, yFinal)
  }

  desenha() {
    ctx.save();
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineWidth = 0.80;
    ctx.moveTo(this.xInicio - 4, this.yInicio + 4);
    ctx.lineTo(this.xFinal + 4, this.yFinal - 4);
    ctx.stroke();
    ctx.restore();

  }

  desenha_marcacao_inicio() {
    ctx.save();
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineWidth = 0.80;
    ctx.moveTo(this.xInicio - 4, this.yInicio + 4);
    ctx.lineTo(this.xInicio + 4, this.yInicio - 4);
    ctx.stroke();
    ctx.restore();
  }

  desenha_marcacao_final() {
    ctx.save();
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineWidth = 0.80;
    ctx.moveTo(this.xFinal - 4, this.yFinal + 4);
    ctx.lineTo(this.xFinal + 4, this.yFinal - 4);
    ctx.stroke();
    ctx.restore();

  }
}
class MARCACAO_Y extends MARCACAO {
  constructor(xInicio, yInicio, xFinal, yFinal) {
    super(xInicio, yInicio, xFinal, yFinal)
  }


  desenha() {
    ctx.save();
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineWidth = 0.80;
    ctx.moveTo(this.xInicio - 4, this.yInicio - 4);
    ctx.lineTo(this.xInicio + 4, this.yInicio + 4);
    ctx.stroke();
    ctx.restore();
  }

  desenha_marcacao_inicio() {
    ctx.save();
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineWidth = 0.80;
    ctx.moveTo(this.xInicio - 4, this.yInicio - 4);
    ctx.lineTo(this.xInicio + 4, this.yInicio + 4);
    ctx.stroke();
    ctx.restore();
  }

  desenha_marcacao_final() {
    ctx.save();
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.lineWidth = 0.80;
    ctx.moveTo(this.xFinal - 4, this.yFinal - 4);
    ctx.lineTo(this.xFinal + 4, this.yFinal + 4);
    ctx.stroke();
    ctx.restore();

  }

}
class MARCACAO_COORDENADA extends MARCACAO {
  constructor(xInicio, yInicio, xFinal, yFinal, numero) {
    super(xInicio, yInicio, xFinal, yFinal)
    this.numero = numero;
  }
  desenha_x() {
    ctx.save();
    ctx.font = "11px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(this.numero.toFixed(0), this.xInicio, this.yInicio);
    ctx.restore();
  }

  desenha_y() {
    ctx.save();
    ctx.font = "11px Arial";
    ctx.fillStyle = "black";
    ctx.translate(this.xInicio, this.yInicio);
    ctx.rotate(-0.5 * Math.PI);
    ctx.textAlign = "center";
    ctx.fillText(this.numero.toFixed(0), 0, 0);
    ctx.restore();
  }
}
class MARCACAO_LEGENDA extends MARCACAO {
  constructor(xInicio, yInicio, xFinal, yFinal, legenda, top) {
    super(xInicio, yInicio, xFinal, yFinal)
    this.legenda = legenda;
    this.top = top;
  }
  desenha() {
    ctx.save();
    ctx.font = "11px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(this.legenda, this.xInicio, this.yInicio - this.top);
    ctx.restore();
  }

}



