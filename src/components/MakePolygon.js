import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MakeNaverMap from "./MakeNaverMap";
import styles from "./MakePolygon.module.css";

export default function MakePolygon() {
  const [polygon, setPolygon] = useState("");
  const [toastStatus, setToastStatus] = useState(false);
  const result = useRef();
  const toast = useRef();
  const getPolygon = (polygon) => setPolygon(polygon);
  const closePolygon = () => {
    setPolygon(polygon && `${polygon}, ${polygon.split(",")[1].trim()}`);
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result.current.value);
    setToastStatus(true);
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
          <input
            type='submit'
            value='닫기'
            onClick={closePolygon}
            className={`${styles.button} ${styles.submit}`}
          />
        </div>
      </div>
      <MakeNaverMap getPolygon={getPolygon} />
    </div>
  );
}
