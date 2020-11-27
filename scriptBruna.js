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
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);   
    var celula3 = linha.insertCell(2); 
    var celula4 = linha.insertCell(3);
    celula1.innerHTML = RetornaDataHoraAtual();
    celula2.innerHTML = `<input type="text" id="descricao" name="codDescricao[` + contadorDescricao + `]" placeholder="Produto">`;
    celula3.innerHTML = `<input type="text" id="valor" name="codValor[`+ contadorValor +`]" placeholder="Valor">`;
    celula4.innerHTML =  "<button onclick='removeLinha(this)'>Remover</button>";
}

function salvaDados(id) {
    var teste = document.getElementById(id).value;
    document.getElementsByClassName("info-remover").innerHTML = teste;
    document.getElementById(id).style.display = "none";
}

// funcao remove uma linha da tabela
function removeLinha(linha) {
    var i=linha.parentNode.parentNode.rowIndex;
    document.getElementById('tbl').deleteRow(i);
    contadorDescricao + 1;
    contadorValor + 1;
}