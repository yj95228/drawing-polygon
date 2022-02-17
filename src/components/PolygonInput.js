import React, { useState } from "react";
import styles from "./PolygonInput.module.css";

function PolygonInput(props) {
  const [polygon, setPolygon] = useState("");
  const polygonChangeHandler = (event) => setPolygon(event.target.value);
  const submitPolygon = () => {
    props.propFunction(polygon);
  };
  return (
    <div className={styles.container}>
      <textarea className={styles.input} onChange={polygonChangeHandler} />
      <button onClick={submitPolygon} className={styles.button}>
        변환
      </button>
    </div>
  );
}

export default PolygonInput;
