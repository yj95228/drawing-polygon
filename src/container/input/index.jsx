import React from 'react';
//TODO: module.css에서 emotion으로 완전히 변경
import styles from './DrawContainer.module.css';
import DrawNaverMap from './NaverMap.jsx';
import useStore from '../../store/input';
import Nav from '../../components/Nav';
import Button from '../../components/Button';
import Option from '../../components/Option';


function DrawContainer() {
  const [WKT, JSON] = ['WKT','JSON'];
  const WKTPlaceholder = `폴리곤을 WKT 형식으로 작성해주세요
  
  ex) POLYGON((126.88629117743575 37.509014447622896, 126.89022728765188 37.50573926721649, 126.89309905739181 37.50721530335715, 126.89013312271457 37.511438814295325, 126.88629117743575 37.509014447622896))`;
  const JSONPlaceholder = `폴리곤을 JSON 형식으로 작성해주세요
  
  ex) {"coordinates": [[[127.021057,37.503455],[127.028214,37.488473],[127.03507,37.490567],[127.02926,37.502553],[127.028342,37.502257],[127.027602,37.502683],[127.026443,37.505066],[127.021057,37.503455]]],"type": "Polygon"}`;
  const { input, option, polygon, selectWKT, selectJSON, setInput, drawPolygon, resetPolygon } = useStore((state) => state)
  const onClickWKT = () => {
    selectWKT();
    resetPolygon(WKT)
  }
  const onClickJSON = () => {
    selectJSON();
    resetPolygon(JSON)
  }
  const submitPolygon = (event) => {
    event.preventDefault();
    drawPolygon(option, input);
  };
  const keyDownPolygon = (event) => {
    setInput(event);
    if (event.key === 'Enter') {
      submitPolygon(event);
    }
  };
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.options}>
        {option === WKT ? (
          <Option onClick={onClickWKT} text='WKT' target='true' />
        ) : (
          <Option onClick={onClickWKT} text='WKT' />
        )}
        {option === JSON ? (
          <Option onClick={onClickJSON} text='JSON' target='true' />
        ) : (
          <Option onClick={onClickJSON} text='JSON' />
        )}
      </div>
      <form onSubmit={submitPolygon} className={styles.form}>
        {option === WKT ? (
          <textarea
            className={styles.input}
            onChange={setInput}
            onKeyDown={keyDownPolygon}
            value={input}
            placeholder={WKTPlaceholder}
          />
        ) : (
          <textarea
            className={styles.input}
            onChange={setInput}
            onKeyDown={keyDownPolygon}
            value={input}
            placeholder={JSONPlaceholder}
          />
        )}
        <div className={styles.buttons}>
          <Button onClick={submitPolygon} text='그리기' submit />
          <Button onClick={() => {resetPolygon(option)}} text='초기화' />
        </div>
      </form>
      <DrawNaverMap polygon={polygon} option={option} />
    </div>
  );
}

export default DrawContainer;
