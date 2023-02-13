import './App.css';
import React, { useEffect } from 'react';
import maplibregl from 'maplibre-gl'; // or "const maplibregl = require('maplibre-gl');"


function App() {
  useEffect(() => {
      const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 1 // starting zoom
        });
    }
  );
  return (
    <div className="App">
      <div id="map"></div>
    </div>
  );
}

export default App;
