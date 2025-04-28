//carrosel

var radio =document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true //marca a primeira bolinha quando a primeira imagem aparece

setInterval(() => {
    proximaImagem() 
}, 5000) //intervalo da passagem das imagens

function proximaImagem() { //verificador
    cont++

    if (cont > 3) {
        cont = 1  
   }
    document.getElementById('radio'+cont).checked = true
}

//mapa
function initMap() {
    // Localização (exemplo: São Paulo)
    const localizacao = { lat: -23.180152697331142, lng: -50.66436608735291};
    // Criar o mapa
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: localizacao,
    });
    // Adicionar um marcador
    const marker = new google.maps.Marker({
        position: localizacao,
        map: map,
    });
  }