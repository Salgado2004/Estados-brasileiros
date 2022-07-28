function voltar(){
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/Estados.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="paranaBtn" onclick="paranaMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="saoPauloBtn" onclick="saoPauloMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="santaCatarinaBtn" onclick="santaCatarinaMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="riodeJaneiroBtn" onclick="riodeJaneiroMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="rioGrandedoSulBtn" onclick="rioGrandedoSulMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="minasGeraisBtn" onclick="minasGeraisMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="matoGrossoBtn" onclick="matoGrossoMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="matoGrossodoSulBtn" onclick="matoGrossodoSulMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="goiasBtn" onclick="goiasMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="acreBtn" onclick="acreMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="amazonasBtn" onclick="amazonasMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="paraBtn" onclick="paraMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="paraibaBtn" onclick="paraibaMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="piauiBtn" onclick="piauiMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="bahiaBtn" onclick="bahiaMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="rioGrandedoNorteBtn" onclick="rioGrandedoNorteMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="pernambucoBtn" onclick="pernambucoMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="cearaBtn" onclick="cearaMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="maranhaoBtn" onclick="maranhaoMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="roraimaBtn" onclick="roraimaMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="rondoniaBtn" onclick="rondoniaMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="tocantinsBtn" onclick="tocantinsMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="espiritoSantoBtn" onclick="espiritoSantoMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="sergipeBtn" onclick="sergipeMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="alagoasBtn" onclick="alagoasMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
            <button id="amapaBtn" onclick="amapaMap()"><img src="outline_location_on_black_24dp.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'home.html');
}

function paranaMap(){
    document.getElementById("mapa").style.animation = "paranaImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/parana.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `;
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=PR');
}
function saoPauloMap() {
    document.getElementById("mapa").style.animation = "saoPauloImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/sãoPaulo.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=SP');
}
function santaCatarinaMap() {
    document.getElementById("mapa").style.animation = "santaCatarinaImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/SantaCatarina.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=SC');
}
function riodeJaneiroMap() {
    document.getElementById("mapa").style.animation = "riodeJaneiroImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/rioJaneiro.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=RJ');
}
function rioGrandedoSulMap() {
    document.getElementById("mapa").style.animation = "rioGrandeSulImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/rioGrandeSul.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=RS');
}
function minasGeraisMap() {
    document.getElementById("mapa").style.animation = "minasGeraisImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/minasGerais.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=MG');
}
function matoGrossoMap() {
    document.getElementById("mapa").style.animation = "matoGrossoImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/matoGrosso.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=MT');
}
function matoGrossodoSulMap() {
    document.getElementById("mapa").style.animation = "matoGrossoSulImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/matoGrossoSul.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=MS');
}
function goiasMap() {
    document.getElementById("mapa").style.animation = "goiasImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/goias.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=GO');
}
function acreMap() {
    document.getElementById("mapa").style.animation = "acreImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/acre.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=AC');
}
function amazonasMap() {
    document.getElementById("mapa").style.animation = "amazonasImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/amazonas.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=AM');
}
function paraMap() {
    document.getElementById("mapa").style.animation = "paraImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/para.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=PA');
}
function paraibaMap() {
    document.getElementById("mapa").style.animation = "paraibaImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/paraíba.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=PB');
}
function piauiMap() {
    document.getElementById("mapa").style.animation = "piauiImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/piaui.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=PI');
}
function bahiaMap() {
    document.getElementById("mapa").style.animation = "bahiaImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/bahia.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=BA');
}
function rioGrandedoNorteMap() {
    document.getElementById("mapa").style.animation = "rioGrandeNorteImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/rioGrandeNorte.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=RN');
}
function pernambucoMap() {
    document.getElementById("mapa").style.animation = "pernambucoImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/pernambuco.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=PE');
}
function cearaMap() {
    document.getElementById("mapa").style.animation = "cearaImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/ceara.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=CE');
}
function maranhaoMap() {
    document.getElementById("mapa").style.animation = "maranhaoImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/maranhão.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=MA');
}
function roraimaMap() {
    document.getElementById("mapa").style.animation = "roraimaImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/roraima.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=RR');
}
function rondoniaMap() {
    document.getElementById("mapa").style.animation = "rondoniaImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/rondonia.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=RO');
}
function tocantinsMap() {
    document.getElementById("mapa").style.animation = "tocantinsImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/tocantins.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=TO');
}
function espiritoSantoMap() {
    document.getElementById("mapa").style.animation = "espiritoSantoImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/espiritoSanto.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=ES');
}
function sergipeMap() {
    document.getElementById("mapa").style.animation = "sergipeImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/sergipe.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=SE');
}
function alagoasMap() {
    document.getElementById("mapa").style.animation = "alagoasImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/alagoas.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=AL');
}
function amapaMap() {
    document.getElementById("mapa").style.animation = "amapaImg 2s";
    document.getElementById("mapa").style.backgroundImage = "url(estados_brasil/amapa.png)";
    document.getElementById("mapa").innerHTML = `
            <button id="voltar" onclick="voltar()"><img src="fechar.png" width="100%"></button>
    `
    document.getElementById("quadro").setAttribute('src', 'guiaEstado.php?uf=AP');
}