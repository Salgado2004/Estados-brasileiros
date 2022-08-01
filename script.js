function voltar(){
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/Estados.png)";
    document.getElementById("mapa").innerHTML = `
    <button id="paranaBtn" onclick="stateMap('parana','PR')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="saoPauloBtn" onclick="stateMap('saoPaulo','SP')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="santaCatarinaBtn" onclick="stateMap('santaCatarina','SC')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="riodeJaneiroBtn" onclick="stateMap('riodeJaneiro','RJ')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="rioGrandedoSulBtn" onclick="stateMap('rioGrandedoSul','RS')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="minasGeraisBtn" onclick="stateMap('minasGerais','MG')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="matoGrossoBtn" onclick="stateMap('matoGrosso','MT')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="matoGrossodoSulBtn" onclick="stateMap('matoGrossodoSul','MS')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="goiasBtn" onclick="stateMap('goias','GO')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="acreBtn" onclick="stateMap('acre','AC')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="amazonasBtn" onclick="stateMap('amazonas','AM')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="paraBtn" onclick="stateMap('para','PA')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="paraibaBtn" onclick="stateMap('paraiba','PB')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="piauiBtn" onclick="stateMap('piaui','PI')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="bahiaBtn" onclick="stateMap('bahia','BA')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="rioGrandedoNorteBtn" onclick="stateMap('rioGrandedoNorte','RN')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="pernambucoBtn" onclick="stateMap('pernambuco','PE')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="cearaBtn" onclick="stateMap('ceara','CE')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="maranhaoBtn" onclick="stateMap('maranhao','MA')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="roraimaBtn" onclick="stateMap('roraima','RR')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="rondoniaBtn" onclick="stateMap('rondonia','RO')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="tocantinsBtn" onclick="stateMap('tocantins','TO')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="espiritoSantoBtn" onclick="stateMap('espiritoSanto','ES')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="sergipeBtn" onclick="stateMap('sergipe','SE')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="alagoasBtn" onclick="stateMap('alagoas','AL')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    <button id="amapaBtn" onclick="stateMap('amapa','AP')"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'home.html');
}

function stateMap(estado, uf){
    var estado = estado;
    var uf = uf;
    document.getElementById("mapa").style.animation = estado + "Img 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/"+estado+".png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `;
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf='+uf);
}
