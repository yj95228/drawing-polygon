import React, { useState, useEffect, useRef } from 'react';
import useStore from 'store/click';
import Flex from 'components/Flex';
import Layout from 'container/Layout';
import Button from 'components/Button';
import dynamic from 'next/dynamic';
import SearchModal from 'container/SearchModal';

const ClickNaverMap = dynamic(() => import('container/ClickNaverMap'), {
  ssr: false,
});

export default function ClickPolygon() {
  const { polygon, closePolygon, resetPolygon } = useStore((state) => state);
  const [close, setClose] = useState(false);
  const [toast, setToast] = useState(false);
  const [modal, setModal] = useState(false);
  const result = useRef<HTMLTextAreaElement>(null);
  const toastRef = useRef<HTMLDivElement>(null);
  const onClickSearchBtn = () => {
    setModal(true);
  };
  const onClickClosePolygon = () =>
    new Promise<void>((resolve) => {
      if (!close) closePolygon();
      setClose(true);
      resolve();
    });
  const copyToClipboard = async () => {
    if (polygon && result.current) {
      await onClickClosePolygon();
      await navigator.clipboard.writeText(result.current?.value);
      setToast(true);
    }
  };
  const onclickResetBtn = () => {
    resetPolygon();
    setClose(false);
  };
  const onModalClick = () => setModal(false);
  useEffect(() => {
    if (toast) setTimeout(() => setToast(false), 1000);
  }, [toast]);
  return (
    <Layout>
      <Flex className='wrapper'>
        {/* TODO: textarea도 재사용성을 위해 component로 분리하고 싶은데 ref 참조가 styled component에 안 걸려서 우선 그대로 둠 */}
        <textarea
          readOnly
          ref={result}
          value={polygon && `POLYGON((${polygon.slice(2)}))`}
          placeholder='지도 상에 원하는 지점을 클릭하여 폴리곤을 그려주세요'
          onClick={copyToClipboard}
        />
        {toast && (
          <div ref={toastRef} className='toastpopup'>
            클립보드에 복사되었습니다
          </div>
        )}
        <Flex direction='column'>
          <Button onClick={onClickSearchBtn} text='검색' submit />
          <Button onClick={onclickResetBtn} text='초기화' />
        </Flex>
        {modal && <SearchModal onModalClick={onModalClick} />}
      </Flex>
      <ClickNaverMap />
    </Layout>
  );
}
