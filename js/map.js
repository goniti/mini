// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 39.757747;
var lon = -105.003051;
var macarte = null;
// Fonction d'initialisation de la carte
function initMap() {
    // Nous définissons le dossier qui contiendra les marqueurs
    var iconBase = '../img/icon/';
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 17);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
    // Nous définissons l'icône à utiliser pour le marqueur, sa taille affichée (iconSize), sa position (iconAnchor) et le décalage de son ancrage (popupAnchor)
    var myIcon = L.icon({
        iconUrl: iconBase + "marker-business.png",
        iconSize: [83, 67],
        iconAnchor: [25, 50],
        popupAnchor: [0, -60],
    });
    // Nous ajoutons un marqueur
    var marker = L.marker([lat, lon],{ icon: myIcon }).addTo(macarte);
    marker.bindPopup(
        "<div class='marker__poppup'> <div class='marker__poppup--title'> <h6>Business</h6> </div> <div class='marker__poppup--numero'><p>Tel:+000000004</p> </div>  <div class='marker__poppup--name'>John joe</div>  </div> "
        
        );
}
window.onload = function () {
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap();
};


// CUSTOM LOCA
//     "Denver": { "lat": 39.757747, "lon": -105.003051 },
//     "Kansas City": { "lat": 39.097224, "lon": -94.583927 },
//     "Memphis": { "lat": 35.147765, "lon": -90.035370 },
//     "Minneapolis": { "lat": 44.977231, "lon": -93.260837 }

