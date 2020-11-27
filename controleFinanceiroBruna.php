<?php
    session_start();
    include "include_Redireciona.php";
?>
<!DOCTYPE html>
<head>
  <meta charset="UTF-8" />
  <title>Controle Financeiro</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <link rel="stylesheet" type="text/css" href="estiloBruna.css" />
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
  <script type="text/javascript" src="scriptBruna.js"></script>    
</head>
<body>
    <nav id="menu">
        <ul>
            <li><a href="historia.php">Historia</a></li>
            <li><a href="controleFinanceiro.php">Controle Financeiro</a></li>
            <li><a href="controleFinanceiroBruna.php">Controle Financeiro Bruna</a></li>
            <li><a href="contato.php">Contato</a></li>
        </ul>
    </nav>
    <button onclick="adicionaLinha('tbl')">Adicionar</button>
    <table id="tbl" name="nome" class="TabControleFinanceiro">
        <thead>
            <tr>
                <th class="coluna1">Data</th>
                <th class="coluna2">Descrição</th>
                <th class="coluna1">Valor</th>
                <th class="coluna1">Remover</th>
            </tr>
        </thead>
        <tbody>
            <tr class="conta">
                <td class="info-data"></td>
                <td class="info-descricao"></td>
                <td class="info-valor"></td>
                <td class="info-remover"></td>
            </tr>
        </tbody>
    </table>
</body>
</html>