//Criando mapa
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15)

//Criando e adicionando o titlelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

//Criando icone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupArchor: [170, 2]
})

//Criando popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" </a>')

//Criando e adicionando marcador
L.marker([-27.222633, -49.6455874], { icon }).addTo(map)
    .bindPopup(popup)