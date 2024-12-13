import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet.heat';
import './Heatmap.css';

const Heatmap = () => {
  useEffect(() => {
    const map = L.map('heatmap', {
      center: [40.7128, -74.0060], // Example: New York City
      zoom: 12,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }),
      ],
    });

    // Example heatmap data
    const heatData = [
      [40.7128, -74.0060, 0.5], // [latitude, longitude, intensity]
      [40.73061, -73.935242, 0.8],
      [40.758896, -73.985130, 0.6],
    ];

    L.heatLayer(heatData, { radius: 25 }).addTo(map);

    return () => map.remove(); // Clean up the map on component unmount
  }, []);

  return (
    <div>
      <header>
        <h1>Noise Pollution Heatmap</h1>
      </header>
      <div id="heatmap" className="heatmap-container"></div>
    </div>
  );
};

export default Heatmap;
