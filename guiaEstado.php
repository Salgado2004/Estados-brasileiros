<?php
$uf = $_GET['uf'];
?>
<html lang="pt-br" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=devide-width, initial-scale=1.0">
        <title>Estados brasileiros</title>
        <link rel="stylesheet" href="transicoes.css">
        <link rel="stylesheet" href="estiloGeral.css">
        <script type="text/javascript" src="script.js"></script>

        <style>
            *{
                transition: 3s ease-in;
            }
        </style>

    </head>
    <body>
        <h1 id="titulo">Estados brasileiros</h1>

        <?php
            $conexao = mysqli_connect("localhost:3306", "root", "laura2312");
            mysqli_set_charset($conexao, "utf8");
            if (!$conexao) {
                die("Impossível conectar: " . mysqli_connect_error($conexao));
                }
            mysqli_select_db($conexao, "cidades_brasileiras");
            $consulta = "SELECT estados.estado as 'nome', sum(populacao_imigrante) as 'pop1', sum(populacao_nativa) as 'pop2', sum(area_km2) as 'area1', sum(area_verde_hectares) as 'area2', avg(IDHM) as 'IDHM', count(cidade) as 'qtd_cidades' from estados, cidades where estados.uf = '$uf' and cidades.estado = estados.uf";
            $conj_resultados = mysqli_query($conexao, $consulta);
            $num = mysqli_num_rows($conj_resultados);
            $linha = mysqli_fetch_array($conj_resultados, MYSQLI_ASSOC);
            $nome = $linha['nome'];
            $idhm = $linha['IDHM'];
            $qtdCidades = $linha['qtd_cidades'];
            $idhm = number_format($idhm, 3, '.', '');
            $população = $linha['pop1'] + $linha['pop2'];
            $area = $linha['area1'] + ($linha['area2']/100);
            $consulta = "SELECT cidade from cidades where capital = '$uf'";
            $conj_resultados = mysqli_query($conexao, $consulta);
            $num = mysqli_num_rows($conj_resultados);
            $linha = mysqli_fetch_array($conj_resultados, MYSQLI_ASSOC);
            $capital = $linha['cidade'];
            echo("<h1>$nome</h1>");
            echo ("<table>");
            echo ("<tr>");
            echo("<th>População</th>");
            echo("<td>$população</td>");
            echo("<th>Capital</th>");
            echo("<td>$capital</td>");
            echo ("</tr>");
            echo ("<tr>");
            echo("<th>Área total</th>");
            echo("<td>$area km²</td>");
            echo("<th>Sigla</th>");
            echo("<td>$uf</td>");
            echo ("</tr>");
            echo ("<tr>");
            echo("<th>IDH médio</th>");
            echo("<td>$idhm</td>");
            echo("<th>Cidades</th>");
            echo("<td>$qtdCidades</td>");
            echo ("</tr>");
            echo ("</table>");
            mysqli_close($conexao);
        ?>
        <div class="lista">
            <?php
                echo ("<h3>Cidades do $nome</h3>");
            ?>
            <ul>
            <?php
                $conexao = mysqli_connect("localhost:3306", "root", "laura2312");
                mysqli_set_charset($conexao, "utf8");
                if (!$conexao) {
                    die("Impossível conectar: " . mysqli_connect_error($conexao));
                    }
                mysqli_select_db($conexao, "cidades_brasileiras");
                $consulta = "SELECT * from cidades where estado = '$uf'";
                $conj_resultados = mysqli_query($conexao, $consulta);
                $num = mysqli_num_rows($conj_resultados);
                for ($i = 1; $i <= $num; $i ++){
                    $linha = mysqli_fetch_array($conj_resultados, MYSQLI_ASSOC);
                    $cidade = $linha['cidade'];
                    echo("<li>$cidade</li>");
                }

                mysqli_close($conexao);
            ?>
            </ul>
        </div>
        <footer>&copy Leonardo Salgado</footer>
    </body>
</html>