// initialise latitude et longitude
var lat = 39.757747;
var lon = -105.003051;
var mymap = null;
// Fonction d'initialisation de la carte
function initMap() {
    // Nous définissons le dossier qui contiendra les marqueurs
    var iconBase = './img/icon/';
    // Crée objet "mymap"
    mymap = L.map('map').setView([lat, lon], 17);
    //  récupèrez les cartes (tiles) à l'adresse suivante openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(mymap);
    // Nous définissons l'icône à utiliser pour le marqueur, sa taille affichée (iconSize), sa position (iconAnchor) et le décalage de son ancrage (popupAnchor)
    var myIcon = L.icon({
        iconUrl: iconBase + "marker-business.png",
        iconSize: [83, 67],
        iconAnchor: [25, 50],
        popupAnchor: [0, -60],
    });
    // Nous ajoutons un marqueur
    var marker = L.marker([lat, lon],{ icon: myIcon }).addTo(mymap);
    marker.bindPopup(
        "<div class='marker__poppup'> <div class='marker__poppup--title'> <h6>Business</h6> </div> <div class='marker__poppup--numero'><p>Tel:+000000004</p> </div>  <div class='marker__poppup--name'>John joe</div>  </div> "
        
        );
}
window.onload = function () {
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap();
};
