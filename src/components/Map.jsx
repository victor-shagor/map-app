import React, { useEffect } from "react";
import { useMap, GeoJSON, TileLayer, MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const RecenterAutomatically = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [center]);
  return null;
};

const MapComponent = ({ features }) => {
  const center = features[0]?.geometry?.coordinates[0];
  return (
    <MapContainer
      center={center}
      style={{ height: "80vh", width: "80vw" }}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={features} key={"unique"} />
      <RecenterAutomatically center={center} />
    </MapContainer>
  );
};

export default MapComponent;
