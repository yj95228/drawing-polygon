import React, { useState } from 'react';
//TODO: module.css에서 emotion으로 완전히 변경
import styles from './DrawContainer.module.css';
import DrawNaverMap from './NaverMap.jsx';
import InputPolygon from './InputPolygon.jsx';
import Nav from '../../components/Nav';

function DrawContainer() {
  // TODO: state들 상태관리 라이브러리로 분리
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
