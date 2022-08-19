import React, { useState } from "react";
import styles from "./InputPolygon.module.css";

function InputPolygon(props) {
  const WKT = "WKT";
  const JSON = "JSON";
  const WKTPlaceholder = `폴리곤을 WKT 형식으로 작성해주세요

ex) POLYGON((126.88629117743575 37.509014447622896, 126.89022728765188 37.50573926721649, 126.89309905739181 37.50721530335715, 126.89013312271457 37.511438814295325, 126.88629117743575 37.509014447622896))`;
  const JSONPlaceholder = `폴리곤을 JSON 형식으로 작성해주세요
  
ex) {"coordinates": [[[127.021057,37.503455],[127.028214,37.488473],[127.03507,37.490567],[127.02926,37.502553],[127.028342,37.502257],[127.027602,37.502683],[127.026443,37.505066],[127.021057,37.503455]]],"type": "Polygon"}`;
  const [polygon, setPolygon] = useState("");
  const [option, setOption] = useState(WKT);

  const selectWKT = () => {
    setPolygon("");
    setOption(WKT);
    props.getPolygon(WKT, polygon);
  };
  const selectJSON = () => {
    setPolygon("");
    setOption(JSON);
    props.getPolygon(JSON, polygon);
  };
  const changePolygon = (event) => {
    setPolygon(event.target.value);
  };
  const keyDownPolygon = (event) => {
    changePolygon(event);
    if (event.key === "Enter") {
      submitPolygon(event);
    }
  };
  const drawingPolygon = () => props.getPolygon(option, polygon);
  const submitPolygon = (event) => {
    event.preventDefault();
    drawingPolygon();
  };
  const resetPolygon = () => {
    setPolygon("");
    props.getPolygon(option, option === WKT ? "," : '{"coordinates":[[[]]]}');
  };
  return (
    <>
      <div className={styles.options}>
        <button
          className={
            option === WKT ? `${styles.target} ${styles.option}` : styles.option
          }
          onClick={selectWKT}
        >
          {WKT}
        </button>
        <button
          className={
            option === JSON
              ? `${styles.target} ${styles.option}`
              : styles.option
          }
          onClick={selectJSON}
        >
          {JSON}
        </button>
      </div>
      <div onSubmit={submitPolygon} className={styles.container}>
        {option === WKT ? (
          <textarea
            className={styles.input}
            onChange={changePolygon}
            onKeyDown={keyDownPolygon}
            value={polygon}
            placeholder={WKTPlaceholder}
          />
        ) : (
          <textarea
            className={styles.input}
            onChange={changePolygon}
            onKeyDown={keyDownPolygon}
            value={polygon}
            placeholder={JSONPlaceholder}
          />
        )}
        <div className={styles.buttons}>
          <input
            type='submit'
            value='그리기'
            onClick={drawingPolygon}
            className={`${styles.button} ${styles.submit}`}
          />
          <input
            type='reset'
            value='초기화'
            className={styles.button}
            onClick={resetPolygon}
          />
        </div>
      </div>
    </>
  );
}

export default InputPolygon;
