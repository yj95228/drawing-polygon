import React, { useState, useEffect, useRef } from 'react';
import useStore from '../../store/click';
import ClickNaverMap from './NaverMap';
//TODO: module.css에서 emotion으로 완전히 변경
import styles from './ClickPolygon.module.css';
import Nav from '../../components/Nav/index';
import Button from '../../components/Button/index';

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
        {/* TODO: textarea도 재사용성을 위해 component로 분리하고 싶은데 ref 참조가 styled component에 안 걸려서 우선 그대로 둠 */}
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
          <Button onClick={onClickCloseBtn} text='닫기' submit />
          <Button onClick={onclickResetBtn} text='초기화' />
        </div>
      </div>
      <ClickNaverMap />
    </div>
  );
}
