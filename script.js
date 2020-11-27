//Funcao adiciona uma nova linha na tabela
function insereLinha(idTabela) {
    var tabela = document.getElementById(idTabela);
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);   
    var celula3 = linha.insertCell(2);
    var celula4 = linha.insertCell(3); 
    celula1.innerHTML = RetornaDataHoraAtual();
    celula2.innerHTML = document.getElementById('descricao').value;
    celula3.innerHTML = document.getElementById('valor').value;
    celula4.innerHTML =  "<button onclick='removeLinha(this)'>Remover</button>";
}

function somaValores(){
    var els = document.getElementsByClassName("info-valor");
    alert(els);
    var valorcalculado = 0;
    [].forEach.call(els, function (el) 
    {
        valorcalculado += parseInt(el.innerHTML);
    });

    document.getElementById("valorTotal").innerHTML = valorcalculado;
}

//Retorna data atual
function RetornaDataHoraAtual(){
    var data = new Date();
    var dataAtual = data.getDate() + '/' + (data.getMonth()+1) + '/' + data.getFullYear() + ' ' + data.getHours() + ':' + data.getMinutes();
    return dataAtual;
}

// funcao remove uma linha da tabela
function removeLinha(linha) {
    var i=linha.parentNode.parentNode.rowIndex;
    document.getElementById('tbl').deleteRow(i);
}

    