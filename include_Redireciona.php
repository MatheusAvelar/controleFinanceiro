<?php
$teste = session_status();
print_r($teste);
//Verifica se a Sessao ainda esta ativa para continuar e poder acessar outras URLs
if ( session_status() == 'PHP_SESSION_DISABLED' ) {
    echo"<script>window.location.href='index.html';</script>";
    exit(0);
}
?>