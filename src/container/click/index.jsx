import React, { useState, useEffect, useRef } from 'react';
import useStore from '../../store/click';
import Flex from '../../components/Flex';
import Nav from '../../components/Nav';
import Button from '../../components/Button';
import { Wrapper } from './styles'
import ClickNaverMap from './NaverMap';

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
    <Wrapper direction='column'>
      <Nav />
      <Flex className='input-wrapper'>
        {/* TODO: textarea도 재사용성을 위해 component로 분리하고 싶은데 ref 참조가 styled component에 안 걸려서 우선 그대로 둠 */}
        <textarea
          readOnly
          ref={result}
          value={polygon && `POLYGON((${polygon.slice(2)}))`}
          placeholder='지도 상에 원하는 지점을 클릭하여 폴리곤을 그려주세요'
          onClick={copyToClipboard}
        />
        {toastStatus && (
          <div ref={toast} className='toastpopup'>
            클립보드에 복사되었습니다
          </div>
        )}
        <Flex direction='column'>
          <Button onClick={onClickCloseBtn} text='닫기' submit />
          <Button onClick={onclickResetBtn} text='초기화' />
        </Flex>
      </Flex>
      <ClickNaverMap />
    </Wrapper>
  );
}
