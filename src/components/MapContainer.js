import React, { useState } from "react";
import PolygonInput from "./PolygonInput.js";
import NaverApiMap from "./NaverAPIMap.js";
import styles from "./MapContainer.module.css";

function MapContainer() {
  const [polygon, setPolygon] = useState([]);
  const [option, setOption] = useState('WKT');
  const regex = /[^0-9\.\s,]/g;
  const getPolygon = (option, polygon) => {
    setOption(option);
    if(option === 'WKT'){
      setPolygon(polygon.replace(regex, "").split(","));
    }
    else {
      console.log(option,polygon);
      if(polygon) setPolygon(...JSON.parse(polygon).coordinates)
    }
  }
  return (
    <div className={("outline", styles.outline)}>
      <div className={("container", styles.container)}>
        <h1 className={styles.h1}>Drawing Polygon</h1>
        <hr className={styles.hr} />
        <PolygonInput propFunction={getPolygon}/>
        <NaverApiMap polygon={polygon} option={option}/>
        <div className={"map"}></div>
      </div>
    </div>
  );
}

export default MapContainer;
