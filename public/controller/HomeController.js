$(function () {
    try {
        $("#includedNavbar").load("public/static/templates/navbar.html"); 
        alteraVariavelGlobal(data);
        var resultadoFiltrado = filtraDado();
        var resultadoGerado = geraDado(resultadoFiltrado);
        var resultadoDesenhado = desenhaDado(resultadoGerado);
        changeDivFuro(resultadoDesenhado);

    } catch (error) {
        failureCallback("Erro no fluxo de inicialização: " + error);
    }
});


function filtraDado() {
    try {
        const resultadoFiltro = data.map(elemento => {
            if (elemento.hasOwnProperty('X') || elemento.hasOwnProperty('Y')) {
                if (elemento.X > elemento.L || elemento.Y > elemento.A) {
                    delete elemento.X;
                    delete elemento.Y;
                }
            }

            return elemento;
        });

        for (let param in resultadoFiltro) {
            resultadoFiltro[param].F = parseInt(resultadoFiltro[param].F);
            resultadoFiltro[param].L = parseFloat(resultadoFiltro[param].L);
            resultadoFiltro[param].A = parseFloat(resultadoFiltro[param].A);
            resultadoFiltro[param].P = parseFloat(resultadoFiltro[param].P);
        }
        const table = createTable(resultadoFiltro);
        alteraVariavelGlobalTabela(table);

        return resultadoFiltro;
    } catch (error) {
        throw "filtraDado(): Erro formatação de dados=> " + error;
    }
}



function geraDado(base) {
    try {

        const filtroBase = getFiltros();
        const dadosBase = base;

        alteraVariavelGlobalDados(dadosBase, filtroBase);

        return [dadosBase, filtroBase];
    } catch (error) {
        throw "geraDado(): Erro na geração de dados " + error;
    }
}


function desenhaDado(dadosGlobais) {
    try {
        const furos = drawCore(dadosGlobais[1], dadosGlobais[0]);
        return furos;
    } catch (error) {
        throw "desenhaDado(): Erro ao desenhar dados " + error;
    }
}








