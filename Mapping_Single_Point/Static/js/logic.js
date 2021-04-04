var marker = L.marker([51.5, -0.09]).addTo(map);

let map = L.map('mapid').setView(34.0522,-118.2437],14)
//  Add a marker to the map for Los Angeles, California.
L.circleMarker([34.0522, -118.2437], {
    radius:300,
    color:"black",
    fillColor: '#ffffa1'
}).addTo(map);
