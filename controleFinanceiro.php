<?php
    session_start();
    include "include_Redireciona.php";
?>
<!DOCTYPE html>
<head>
  <meta charset="UTF-8" />
  <title>Controle Financeiro</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <link rel="stylesheet" type="text/css" href="estilo.css" />
  <link rel="shortcut icon" href="icone.ico" />
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
  <script type="text/javascript" src="script.js"></script>
</head>
<body>
    <nav id="menu">
        <ul>
            <li><a href="index.php"><img src='logo.png' width="60" height="49"></a></li>
            <li><a href="historia.php">Historia</a></li>
            <li><a href="controleFinanceiro.php">Controle Financeiro</a></li>
            <li><a href="controleFinanceiroBruna.php">Controle Financeiro Bruna</a></li>
            <li><a href="contato.php">Contato</a></li>
        </ul>
    </nav>
    <button onclick="insereLinha('tbl')">Adicionar</button>
    <p>
        <label>Descrição</label>
        <input id="descricao" required="required" type="text" placeholder="Descrição"/>
    </p>
    <p>
        <label>Valor</label>
        <input id="valor" required="required" type="number" placeholder="Valor"/>
    </p>
    <table id="tbl" class="TabControleFinanceiro">
        <thead>
            <tr>
                <th class="coluna1">Data Compra</th>
                <th class="coluna2">Descrição</th>
                <th class="coluna1">Valor</th>
                <th class="coluna3">Remover</th>
            </tr>
        </thead>
        <tbody>
            <tr class="conta">
                <td class="info-data"></td>
                <td class="info-descricao"></td>
                <td class="info-valor"></td>
            </tr>
        </tbody>
        <thead>
            <tr>
                <th></th>
                <th></th>
                <th class="coluna3">Valor Total</th>
            </tr>
            <tr class="conta">
                <td class="info-data"></td>
                <td class="info-descricao"></td>
                <td class="valorTotal"></td>
                <td><button onclick='somaValores()'>Somar</button></td>
            </tr>
        </thead>
    </table>
</body>
</html>
