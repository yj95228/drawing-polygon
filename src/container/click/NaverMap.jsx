import React from 'react';
import {
  RenderAfterNavermapsLoaded,
  NaverMap,
  Marker,
  Polygon,
} from 'react-naver-maps';
import useStore from '../../store/click';

export default function ClickNaverMap() {
  const navermaps = window.naver.maps;
  const { marker, clickPolygon } = useStore((state) => state);
  return (
    <RenderAfterNavermapsLoaded clientId={'jqe51ds7wm'}>
      <NaverMap
        id='maps-examples-polygon'
        style={{
          width: '100%',
          height: '70vh',
          marginLeft: '20px',
          marginRight: '20px',
        }}
        // default로 설정이 필요하다면
        // defaultCenter={[126.9783882, 37.5666103]}
        // defaultZoom={15}
        onClick={clickPolygon}
      >
        {marker.map(({ lat, lng }, index) => (
          <Marker key={index} position={new navermaps.LatLng(lat, lng)} />
        ))}
        {marker.length ? (
          <Polygon
            paths={[marker]}
            fillColor={'#ff0000'}
            fillOpacity={0.3}
            strokeColor={'#ff0000'}
            strokeOpacity={0.6}
            strokeWeight={3}
          />
        ) : null}
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
};