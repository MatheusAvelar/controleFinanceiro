var contadorDescricao = 0;
var contadorValor = 0;

function RetornaDataHoraAtual(){
    var data = new Date();
    var dataAtual = data.getDate() + '/' + (data.getMonth()+1) + '/' + data.getFullYear() + ' ' + data.getHours() + ':' + data.getMinutes();
    return dataAtual;
}

//Funcao adiciona uma nova linha na tabela
function adicionaLinha(idTabela) {
    contadorDescricao++;
    contadorValor++;
    var tabela = document.getElementById(idTabela);
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula0 = linha.insertCell(0);
    var celula1 = linha.insertCell(1);   
    var celula2 = linha.insertCell(2); 
    var celula3 = linha.insertCell(3);
    valor = `idValor[`+ contadorValor +`]`;
    descricao = `idDescricao[`+ contadorDescricao +`]`;
    celula0.innerHTML = RetornaDataHoraAtual();
    celula1.innerHTML = `<input type="text" id="idDescricao[` + contadorDescricao + `]" name="codDescricao[` + contadorDescricao + `]" placeholder="Produto">`;
    celula2.innerHTML = `<input type="text" id="idValor[`+ contadorValor +`]" name="codValor[`+ contadorValor +`]" placeholder="Valor">`;
    celula3.innerHTML = "<button id'btnRemover' onclick='removeLinha(this)'>Remover</button><button id='btnSalvar' onclick='salvaDados(valor,descricao)'>Salvar</button>";
}

function salvaDados(contValor,contDesc) {
    valor = document.getElementById(contValor).value;
    descricao = document.getElementById(contDesc).value;
    alert('Descrição:'+descricao+' - Valor: R$'+valor+',00');
    document.getElementById('btnSalvar').style.display = 'none';
    document.getElementById(contValor).style.display = "none";
    document.getElementById(contDesc).style.display = "none";
}

// funcao remove uma linha da tabela
function removeLinha(linha) {
    var i=linha.parentNode.parentNode.rowIndex;
    document.getElementById('tbl').deleteRow(i);
}