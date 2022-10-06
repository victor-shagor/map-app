import React, { useEffect } from "react";
import {
  useMap,
  GeoJSON,
  TileLayer,
  MapContainer,
  Marker,
} from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const RecenterAutomatically = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [center]);
  return null;
};

const MapComponent = ({ features, center }) => {
  return (
    <MapContainer
      center={center}
      style={{ height: "80vh", width: "80vw" }}
      zoom={7}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={features} key={"unique"} style={{ fillColor: "black" }} />
      <Marker position={center} />
      <RecenterAutomatically center={center} />
    </MapContainer>
  );
};

export default MapComponent;
