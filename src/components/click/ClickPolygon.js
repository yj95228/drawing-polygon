import React, { useState, useEffect, useRef } from 'react';
import useStore from '../../store/store';
import ClickNaverMap from './ClickNaverMap';
import styles from './ClickPolygon.module.css';
import Nav from '../Nav';

export default function ClickPolygon() {
  const { polygon, closePolygon, resetPolygon } = useStore((state) => state);
  const [closeStatus, setCloseStatus] = useState(false);
  const [toastStatus, setToastStatus] = useState(false);
  const result = useRef();
  const toast = useRef();
  const onClickCloseBtn = () => {
    if (!closeStatus) closePolygon();
    setCloseStatus(true);
  };
  const copyToClipboard = () => {
    if (polygon) {
      navigator.clipboard.writeText(result.current.value);
      setToastStatus(true);
    }
  };
  const onclickResetBtn = () => {
    resetPolygon();
    setCloseStatus(false);
  };
  useEffect(() => resetPolygon(), [resetPolygon]);
  useEffect(() => {
    if (toastStatus) setTimeout(() => setToastStatus(false), 1000);
  }, [toastStatus]);
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.textContainer}>
        <textarea
          readOnly
          ref={result}
          className={styles.result}
          value={polygon && `POLYGON((${polygon.slice(2)}))`}
          placeholder='지도 상에 원하는 지점을 클릭하여 폴리곤을 그려주세요'
          onClick={copyToClipboard}
        />
        {toastStatus && (
          <div ref={toast} className={styles.toastPopup}>
            클립보드에 복사되었습니다
          </div>
        )}
        <div className={styles.buttons}>
          <button
            onClick={onClickCloseBtn}
            className={`${styles.button} ${styles.submit}`}
          >
            닫기
          </button>
          <button onClick={onclickResetBtn} className={styles.button}>
            초기화
          </button>
        </div>
      </div>
      <ClickNaverMap />
    </div>
  );
}
