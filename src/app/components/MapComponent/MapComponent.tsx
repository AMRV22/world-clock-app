"use client";
import React, {  FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MapComponentProps {
  location: number[];
}

import { LatLngTuple } from "leaflet";

const MapComponent : FC<MapComponentProps> = ({location}) => {
  console.log(location)
  const center: LatLngTuple = [location[0], location[1]];
  
  return (
    <MapContainer
      style={{ height: "100%", width: "100%" }}
      center={center}
      zoom={8}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MapComponent;
