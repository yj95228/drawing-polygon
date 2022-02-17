import React, { useState } from "react";
import PolygonInput from "./PolygonInput.js";
import NaverApiMap from "./NaverAPIMap.js";
import styles from "./MapContainer.module.css";

function MapContainer() {
  const [polygon, setPolygon] = useState([]);
  const regex = /[^0-9\.\s,]/g;
  const transform = (polygon) => {
    setPolygon(polygon.replace(regex, "").split(","));
  };
  return (
    <div className={"outline"}>
      <div className={("container", styles.container)}>
        <PolygonInput propFunction={transform} />
        <NaverApiMap polygon={polygon} />
        <div className={"map"}></div>
      </div>
    </div>
  );
}

export default MapContainer;
