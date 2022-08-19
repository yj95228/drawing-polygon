import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ClickNaverMap from "./ClickNaverMap";
import styles from "./ClickPolygon.module.css";

export default function ClickPolygon() {
  const [polygon, setPolygon] = useState("");
  const [closeStatus, setCloseStatus] = useState(false);
  const [toastStatus, setToastStatus] = useState(false);
  const result = useRef();
  const toast = useRef();
  const resetMarker = useRef();
  const getPolygon = (polygon) => setPolygon(polygon);
  const closePolygon = () => {
    if (!closeStatus)
      setPolygon(polygon && `${polygon}, ${polygon.split(",")[1].trim()}`);
    setCloseStatus(true);
  };
  const copyToClipboard = () => {
    if (polygon) {
      navigator.clipboard.writeText(result.current.value);
      setToastStatus(true);
    }
  };
  const resetPolygon = () => {
    setPolygon("");
    setCloseStatus(false);
    resetMarker.current.setMarker();
  };
  useEffect(() => {
    if (toastStatus) setTimeout(() => setToastStatus(false), 1000);
  }, [toastStatus]);
  return (
    <div className={styles.container}>
      <nav className={styles.menus}>
        <Link to='/' className={`${styles.menu} ${styles.target}`}>
          지도 → 폴리곤
        </Link>
        <Link to='draw' className={styles.menu}>
          폴리곤 → 지도
        </Link>
      </nav>
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
            onClick={closePolygon}
            className={`${styles.button} ${styles.submit}`}
          >
            닫기
          </button>
          <button onClick={resetPolygon} className={styles.button}>
            초기화
          </button>
        </div>
      </div>
      <ClickNaverMap ref={resetMarker} getPolygon={getPolygon} />
    </div>
  );
}
