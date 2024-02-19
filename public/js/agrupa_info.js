function createTable(params) {
  try {
      let paramsGroup = groupByKey(params, 'O');
      let table = [];

      for (let key in paramsGroup) {
          let letter = converteindex(table.length);
          table.push({ "operacao": key, "subtitle": letter });
      }

      return table;
  } catch (error) {
      throw "Criação de tabela: Erro de criação de tabela " + error;
  }
}

function agrupaPorOperacao(params) {
  try {
      let paramsGroup = groupByKey(params, 'F');
      
      for (let f in paramsGroup) {
          paramsGroup[f] = groupByKey(paramsGroup[f], 'O');
      }

      return paramsGroup;
  } catch (error) {
      throw "agrupaPorOperacao: Erro agrupamento de operacao " + error;
  }
}

function agrupaPorFace(params) {
  try {
      return groupByKey(params, 'F');
  } catch (error) {
      throw "agrupaPorFace: Erro agrupamento de face " + error;
  }  
}

function groupByKey(array, key) {
  return array
    .reduce((hash, obj) => {
      if (obj[key] === undefined) return hash;
      return Object.assign(hash, { [obj[key]]: (hash[obj[key]] || []).concat(obj) })
    }, {})
}
function ordenaY(params) {
  try {
      return params.sort((a, b) => a.Y - b.Y);
  } catch (error) {
      throw "ordenaY: Erro na ordenação de Y => " + error;
  }
}
function ordenaX(params) {
  try {
      return params.sort((a, b) => a.X - b.X);
  } catch (error) {
      throw "ordenaX: Erro na ordenação de X => " + error;
  }
}