import React, { useState } from "react";
import styles from "./PolygonInput.module.css";

function PolygonInput(props) {
  const [polygon, setPolygon] = useState("");
  const [option, setOption] = useState('WKT');
  const selectWKT = () => {
    setPolygon("");
    setOption("WKT");
    props.propFunction("WKT",polygon);
  }
  const selectJSON = () => {
    setPolygon("");
    setOption("JSON");
    props.propFunction("JSON",polygon);
  }
  const changePolygon = (event) => {
    setPolygon(event.target.value);
  };
  const keyDownPolygon = (event) => {
    changePolygon(event);
    if (event.key === "Enter") {
      submitPolygon(event);
    }
  };
  const drawingPolygon = () => props.propFunction(option,polygon);
  const submitPolygon = (event) => {
    event.preventDefault();
    drawingPolygon();
  };
  const resetPolygon = (event) => {
    setPolygon("");
    // setState 는 비동기다.
    props.propFunction(option,
      option === 'WKT' ? ',' : '{"coordinates":[[[]]]}'
    )
  };
  return (
    <>
      <div className={styles.options}>
        <span className={option === 'WKT' ? `${styles.target} ${styles.option}` : styles.option} onClick={selectWKT}>WKT</span>
        <span><b> | </b></span>
        <span className={option === 'JSON' ? `${styles.target} ${styles.option}` : styles.option} onClick={selectJSON}>JSON</span>
      </div>
      <div onSubmit={submitPolygon} className={styles.container}>
        {option === 'WKT'
        ? <textarea
          className={styles.input}
          onChange={changePolygon}
          onKeyDown={keyDownPolygon}
          value={polygon}
          placeholder="polygon(경도 위도의 순서) 형식으로 쉼표로 구분하여 적어주세요&#13;&#10;.&#13;&#10;
          ex) POLYGON((126.88629117743575 37.509014447622896, 126.89022728765188 37.50573926721649, 126.89309905739181 37.50721530335715, 126.89013312271457 37.511438814295325, 126.88629117743575 37.509014447622896))"
        />
        : <textarea
          className={styles.input}
          onChange={changePolygon}
          onKeyDown={keyDownPolygon}
          value={polygon}
          placeholder='polygon을 JSON 형식으로 적어주세요&#13;&#10;.&#13;&#10;
          ex) {"coordinates": [[[128.9586506,37.5171085],[128.9561239,37.510245],[128.9556948,37.5092407],[128.9553407,37.5086407],[128.9548472,37.5081854],[128.9526585,37.5068577],[128.9522616,37.5065811],[128.9517627,37.5060832],[128.9510385,37.5046065],[128.9335344,37.5099216],[128.9317963,37.5102024],[128.9332018,37.5193593],[128.9337382,37.5203464],[128.9350257,37.5212399],[128.9362166,37.5217759],[128.9368389,37.5222099],[128.9428792,37.5200315],[128.9585433,37.5171978],[128.9586506,37.5171085]]],"type": "Polygon"}'
        />}
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
    </>
  );
}

export default PolygonInput;
