import React, { useState } from 'react';
import styles from './DrawContainer.module.css';
import DrawNaverMap from './DrawNaverMap.js';
import InputPolygon from './InputPolygon.js';
import Nav from '../Nav';

function DrawContainer() {
  const [polygon, setPolygon] = useState([]);
  const [option, setOption] = useState('WKT');
  // eslint-disable-next-line no-useless-escape
  const regex = /[^0-9\.\s,]/g;
  const getPolygon = (option, polygon) => {
    setOption(option);
    if (option === 'WKT') {
      setPolygon(polygon.replace(regex, '').split(','));
    } else {
      if (polygon) setPolygon(...JSON.parse(polygon).coordinates);
    }
  };
  return (
    <div className={styles.container}>
      <Nav />
      <InputPolygon getPolygon={getPolygon} />
      <DrawNaverMap polygon={polygon} option={option} />
    </div>
  );
}

export default DrawContainer;
