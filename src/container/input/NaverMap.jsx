import React from 'react';
import {
  RenderAfterNavermapsLoaded,
  NaverMap,
  Polygon,
} from 'react-naver-maps';

export default function DrawNaverMap({ option, polygon }) {
  let polygonArray =
    option === 'WKT'
      ? // )[공백],[공백](
        polygon.split(/\)\s*,\s*\(/).map((polygons) => {
          let polygon = polygons.match(
            // 126.5 37.5, 126.7 37.6, ...의 형태
            /\d+\.*\d*\s+\d+\.*\d*\s*(,\s*\d+\.*\d*\d+\.*\d*\d+\.*\d*\s+\d+\.*\d*)*/
          );
          return polygon
            ? // [공백],[공백]
              polygon[0].split(/\s*,\s*/).map((point) => {
                const [x, y] = point.split(' ');
                return { lng: parseFloat(x), lat: parseFloat(y) };
              })
            : { lng: undefined, lat: undefined };
        })
      : polygon.map((point) => ({ lng: point[0], lat: point[1] }));
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
        center={polygonArray[0][0]}
        // zoom={15}
      >
        {polygonArray[0].length && (
          <Polygon
            paths={polygonArray}
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
