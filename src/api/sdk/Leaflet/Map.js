class Map {
    map = null;
    ruta = null;

    destroyMap() {
        if (this.map) {
            this.map.off();              // quita eventos
            this.map.remove();          // remueve mapa de Leaflet
            this.map = null;
        }

        const contenedor = document.getElementById('map_leaflet');
        if (contenedor) contenedor.innerHTML = ""; // limpia el DOM
    }

    renderRecorrido(idDiv, coordenadas) {
        this.destroyMap(); // 👈 Limpieza antes de reiniciar

        this.map = L.map(idDiv).setView(coordenadas[0], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© Mapa diseñado por @JMBobadilla para uso exclusivo de Jornada Digital'
        }).addTo(this.map);

        this.ruta = L.polyline(coordenadas, { color: 'blue' }).addTo(this.map);
        this.map.fitBounds(this.ruta.getBounds(), { padding: [20, 20] });

        this.map.whenReady(() => {
            setTimeout(() => {
                this.map.invalidateSize();
            }, 0);
        });
    }
}



export default new Map();
