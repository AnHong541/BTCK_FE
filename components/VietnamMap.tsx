"use client";

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";

const geoUrl = "/vn_map.geojson";

interface VietnamMapProps {
  center: [number, number];
  zoom: number;
  onProvinceClick: (name: string, centroid: [number, number]) => void;
  selectedName: string | null;
  locations?: { name: string; coords: [number, number]; note: string }[];
}

const VietnamMap: React.FC<VietnamMapProps> = ({
  center, zoom, onProvinceClick, selectedName,
}) => {
  const normalize = (s: string) => {
    if (!s) return "";
    return s.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .replace(/\s+/g, "")
      .trim();
  };

  return (
    <div style={{ width: "100%", height: "100%", minHeight: "500px", background: "#0c0a09" }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 1800, center: [106, 16] }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* SVG filter phát sáng */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-strong" x="-100%" y="-100%" width="300%" height="300%">
            <feColorMatrix type="matrix"
              values="1 0.8 0 0 0.2
                      0.8 0.6 0 0 0.1
                      0   0   0 0 0
                      0   0   0 1 0" result="golden"/>
            <feGaussianBlur in="golden" stdDeviation="6" result="blur1" />
            <feGaussianBlur in="golden" stdDeviation="12" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ZoomableGroup center={center} zoom={zoom} minZoom={1} maxZoom={20}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = geo.properties?.name || "";
                const centroid = geoCentroid(geo) as [number, number];
                const isSelected = !!(selectedName && normalize(name) === normalize(selectedName));

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => onProvinceClick(name, centroid)}
                    style={{
                      default: {
                        fill: isSelected ? "#8c6d31" : "#1c1917",
                        stroke: isSelected ? "#e5d4b1" : "#c8a96e22",
                        strokeWidth: isSelected ? 2 : 0.5,
                        outline: "none",
                        filter: isSelected ? "url(#glow-strong)" : "none",
                        transition: "fill 400ms ease, stroke 400ms ease",
                      },
                      hover: {
                        fill: "#c8a96e33",
                        stroke: "#c8a96e",
                        strokeWidth: 1,
                        outline: "none",
                        cursor: "pointer",
                        filter: "url(#glow)",
                      },
                      pressed: {
                        fill: "#c8a96e",
                        outline: "none",
                        filter: "url(#glow-strong)",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>

          <Marker coordinates={[112.5, 16.5]}>
            <circle r={4} fill="#c8a96e" stroke="#fff" strokeWidth={0.5} />
            <text textAnchor="middle" y={-8} style={{ fontSize: "6px", fill: "#c8a96e", fontWeight: "bold" }}>
              Hoàng Sa
            </text>
          </Marker>

          <Marker coordinates={[114.5, 10.5]}>
            <circle r={4} fill="#c8a96e" stroke="#fff" strokeWidth={0.5} />
            <text textAnchor="middle" y={-8} style={{ fontSize: "6px", fill: "#c8a96e", fontWeight: "bold" }}>
              Trường Sa
            </text>
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </div>

  );
};

export default VietnamMap;