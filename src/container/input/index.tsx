import React from 'react';
import useStore from 'store/input';
import Flex from 'components/Flex';
import Nav from 'components/Nav';
import Button from 'components/Button';
import Option from 'components/Option';
import { Wrapper } from './styles';
import DrawNaverMap from './NaverMap.jsx';

function DrawContainer() {
  const [WKT, JSON] = ['WKT', 'JSON'];
  const WKTPlaceholder = `폴리곤을 WKT 형식으로 작성해주세요
  
  ex) POLYGON((126.88629117743575 37.509014447622896, 126.89022728765188 37.50573926721649, 126.89309905739181 37.50721530335715, 126.89013312271457 37.511438814295325, 126.88629117743575 37.509014447622896))`;
  const JSONPlaceholder = `폴리곤을 JSON 형식으로 작성해주세요
  
  ex) {"coordinates": [[[127.021057,37.503455],[127.028214,37.488473],[127.03507,37.490567],[127.02926,37.502553],[127.028342,37.502257],[127.027602,37.502683],[127.026443,37.505066],[127.021057,37.503455]]],"type": "Polygon"}`;
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
    resetPolygon(WKT);
  };
  const onClickJSON = () => {
    selectJSON();
    resetPolygon(JSON);
  };
  const submitPolygon = (event: React.SyntheticEvent) => {
    event.preventDefault();
    drawPolygon(option, input);
  };
  const keyDownPolygon = (event: React.KeyboardEvent) => {
    setInput(event);
    if (event.key === 'Enter') {
      submitPolygon(event);
    }
  };
  return (
    <Wrapper direction='column'>
      <Nav />
      <div className='option-wrapper'>
        {option === WKT ? (
          <Option onClick={onClickWKT} text='WKT' target />
        ) : (
          <Option onClick={onClickWKT} text='WKT' />
        )}
        {option === JSON ? (
          <Option onClick={onClickJSON} text='JSON' target />
        ) : (
          <Option onClick={onClickJSON} text='JSON' />
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
          <Button
            onClick={() => {
              resetPolygon(option);
            }}
            text='초기화'
          />
        </Flex>
      </form>
      <DrawNaverMap polygon={polygon} option={option} />
    </Wrapper>
  );
}

export default DrawContainer;
