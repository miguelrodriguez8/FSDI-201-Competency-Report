var map = L.map('map').setView([32.71661, -117.157189], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([32.71661, -117.157189]).addTo(map)
    .bindPopup('Our Location')
    .openPopup();