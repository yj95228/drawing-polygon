import React from 'react';
import useStore from 'store/input';
import Flex from 'components/Flex';
import Nav from 'components/Nav';
import Button from 'components/Button';
import Option from 'components/Option';
import { Wrapper } from 'container/input/styles';
import dynamic from 'next/dynamic';
const InputNaverMap = dynamic(() => import('container/input/NaverMap'), {
  ssr: false,
});

export default function InputContainer() {
  const WKT = 'WKT';
  const JSON = 'JSON';
  const [WKTPlaceholder, JSONPlaceholder] = [
    `폴리곤을 WKT 형식으로 작성해주세요
  
  ex) POLYGON((126.88629117743575 37.509014447622896, 126.89022728765188 37.50573926721649, 126.89309905739181 37.50721530335715, 126.89013312271457 37.511438814295325, 126.88629117743575 37.509014447622896))`,
    `폴리곤을 JSON 형식으로 작성해주세요
  
  ex) {"coordinates": [[[127.021057,37.503455],[127.028214,37.488473],[127.03507,37.490567],[127.02926,37.502553],[127.028342,37.502257],[127.027602,37.502683],[127.026443,37.505066],[127.021057,37.503455]]],"type": "Polygon"}`,
  ];
  const {
    input,
    option,
    polygon,
    selectWKT,
    selectJSON,
    setInput,
    drawPolygon,
    resetPolygon,
  } = useStore((state) => state);
  const onClickWKT = () => {
    selectWKT();
    resetPolygon();
  };
  const onClickJSON = () => {
    selectJSON();
    resetPolygon();
  };
  const submitPolygon = (event: React.SyntheticEvent) => {
    event.preventDefault();
    drawPolygon(input);
  };
  const keyDownPolygon = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      submitPolygon(event);
    }
  };
  return (
    <Wrapper direction='column'>
      <Nav />
      <div className='option-wrapper'>
        {option === WKT ? (
          <Option onClick={onClickWKT} text={WKT} isTarget />
        ) : (
          <Option onClick={onClickWKT} text={WKT} />
        )}
        {option === JSON ? (
          <Option onClick={onClickJSON} text={JSON} isTarget />
        ) : (
          <Option onClick={onClickJSON} text={JSON} />
        )}
      </div>
      <form onSubmit={submitPolygon}>
        {option === WKT ? (
          <textarea
            onChange={setInput}
            onKeyDown={keyDownPolygon}
            value={input}
            placeholder={WKTPlaceholder}
          />
        ) : (
          <textarea
            onChange={setInput}
            onKeyDown={keyDownPolygon}
            value={input}
            placeholder={JSONPlaceholder}
          />
        )}
        <Flex direction='column'>
          <Button onClick={submitPolygon} text='그리기' submit />
          <Button onClick={resetPolygon} text='초기화' />
        </Flex>
      </form>
      <InputNaverMap polygon={polygon} option={option} />
    </Wrapper>
  );
}
