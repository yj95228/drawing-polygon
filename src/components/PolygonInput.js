import React, { useState } from "react";
import styles from "./PolygonInput.module.css";

function PolygonInput(props) {
  const [polygon, setPolygon] = useState("");
  const changePolygon = (event) => {
    setPolygon(event.target.value);
  };
  const drawingPolygon = () => {
    props.propFunction(polygon);
  };
  const keyDownPolygon = (event) => {
    changePolygon(event);
    if (event.key === "Enter") {
      submitPolygon(event);
    }
  };
  const submitPolygon = (event) => {
    event.preventDefault();
    drawingPolygon();
  };
  const resetPolygon = (event) => {
    setPolygon("");
    // set state 는 비동기다.
    props.propFunction(",");
  };
  return (
    <div onSubmit={submitPolygon} className={styles.container}>
      <textarea
        className={styles.input}
        onChange={changePolygon}
        onKeyDown={keyDownPolygon}
        value={polygon}
        placeholder="WKT(경도 위도의 순서) 형식으로 쉼표로 구분하여 적어주세요&#13;&#10;.&#13;&#10;
        ex) POLYGON((126.88629117743575 37.509014447622896, 126.89022728765188 37.50573926721649, 126.89309905739181 37.50721530335715, 126.89013312271457 37.511438814295325, 126.88629117743575 37.509014447622896))"
      />
      <div className={styles.buttons}>
        <input
          type="submit"
          value="그리기"
          onClick={drawingPolygon}
          className={`${styles.button} ${styles.submit}`}
        />
        <input
          type="reset"
          value="초기화"
          className={styles.button}
          onClick={resetPolygon}
        />
      </div>
    </div>
  );
}

export default PolygonInput;
