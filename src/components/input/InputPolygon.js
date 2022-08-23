import React, { useState } from 'react';
import styles from './InputPolygon.module.css';
import Button from '../Button';
import Option from '../Option';

function InputPolygon(props) {
  const WKT = 'WKT';
  const JSON = 'JSON';
  const WKTPlaceholder = `폴리곤을 WKT 형식으로 작성해주세요

ex) POLYGON((126.88629117743575 37.509014447622896, 126.89022728765188 37.50573926721649, 126.89309905739181 37.50721530335715, 126.89013312271457 37.511438814295325, 126.88629117743575 37.509014447622896))`;
  const JSONPlaceholder = `폴리곤을 JSON 형식으로 작성해주세요
  
ex) {"coordinates": [[[127.021057,37.503455],[127.028214,37.488473],[127.03507,37.490567],[127.02926,37.502553],[127.028342,37.502257],[127.027602,37.502683],[127.026443,37.505066],[127.021057,37.503455]]],"type": "Polygon"}`;
  const [polygon, setPolygon] = useState('');
  const [option, setOption] = useState(WKT);

  const selectWKT = () => {
    setPolygon('');
    setOption(WKT);
    props.getPolygon(WKT, polygon);
  };
  const selectJSON = () => {
    setPolygon('');
    setOption(JSON);
    props.getPolygon(JSON, polygon);
  };
  const changePolygon = (event) => {
    setPolygon(event.target.value);
  };
  const keyDownPolygon = (event) => {
    changePolygon(event);
    if (event.key === 'Enter') {
      submitPolygon(event);
    }
  };
  const drawingPolygon = () => props.getPolygon(option, polygon);
  const submitPolygon = (event) => {
    event.preventDefault();
    drawingPolygon();
  };
  const resetPolygon = () => {
    setPolygon('');
    props.getPolygon(option, option === WKT ? ',' : '{"coordinates":[[[]]]}');
  };
  return (
    <>
      <div className={styles.options}>
        {option === WKT ? (
          <Option onClick={selectWKT} text='WKT' target />
        ) : (
          <Option onClick={selectWKT} text='WKT' />
        )}
        {option === JSON ? (
          <Option onClick={selectJSON} text='JSON' target />
        ) : (
          <Option onClick={selectJSON} text='JSON' />
        )}
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
          <Button onClick={drawingPolygon} text='그리기' submit />
          <Button onClick={resetPolygon} text='초기화' />
        </div>
      </div>
    </>
  );
}

export default InputPolygon;
