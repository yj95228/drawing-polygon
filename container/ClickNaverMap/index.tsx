import React from 'react';
import {
  RenderAfterNavermapsLoaded,
  NaverMap,
  Marker,
  Polygon,
} from 'react-naver-maps';
import useStore from 'store/click';

declare global {
  interface Constructable<T> {
    new (...args: any): T;
  }
  interface LatLng {
    lat: number;
    lng: number;
  }
  interface Window {
    naver: {
      maps: {
        LatLng: Constructable<LatLng>;
      };
    };
  }
}
export default function ClickNaverMap() {
  const navermaps = window.naver.maps;
  const { marker, coordinates, clickPolygon } = useStore((state) => state);
  const getKeyNotNull = (obj: { [key: string]: string }) =>
    Object.keys(obj).filter((key) => obj[key] !== '');
  let lat, lng;
  // TODO: , 말고 띄어쓰기로도 파싱할 수 있도록 정규표현식으로 변경
  if (getKeyNotNull(coordinates)[0] === 'latlng') {
    [lat, lng] = coordinates['latlng'].split(',');
  } else if (getKeyNotNull(coordinates)[0] === 'lnglat') {
    [lng, lat] = coordinates['lnglat'].split(',');
  } else {
    lat = coordinates['lat'];
    lng = coordinates['lng'];
  }
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
        defaultZoom={15}
        center={
          getKeyNotNull(coordinates).length
            ? {
                lat: lat,
                lng: lng,
              }
            : undefined
        }
        onClick={clickPolygon}
        zoomControl={true}
        mapTypeControl={true}
      >
        {marker.map(({ lat, lng }, index) => (
          <Marker key={index} position={new navermaps.LatLng(lat, lng)} />
        ))}
        {marker.length && (
          <Polygon
            paths={[marker]}
            fillColor={'#ff0000'}
            fillOpacity={0.3}
            strokeColor={'#ff0000'}
            strokeOpacity={0.6}
            strokeWeight={3}
          />
        )}
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
}
