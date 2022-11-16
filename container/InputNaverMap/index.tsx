import React from 'react';
import {
  RenderAfterNavermapsLoaded,
  NaverMap,
  Polygon,
} from 'react-naver-maps';

interface Props {
  option: 'WKT' | 'JSON';
  polygon: string;
}

export default function InputNaverMap({ option, polygon }: Props) {
  const polygonArray =
    option === 'WKT'
      ? // )[공백],[공백](
        polygon.split(/\)\s*,\s*\(/).map((polygons) => {
          const polygon = polygons.match(
            // 126.5 37.5, 126.7 37.6, ...의 형태
            /\d+\.*\d*\s+\d+\.*\d*\s*(,\s*\d+\.*\d*\d+\.*\d*\d+\.*\d*\s+\d+\.*\d*)*/
          );
          return polygon
            ? // [공백],[공백]
              polygon[0].split(/\s*,\s*/).map((point) => {
                const [x, y] = point.split(' ');
                return { lng: x, lat: y };
              })
            : { lng: undefined, lat: undefined };
        })
      : polygon.length > 0
      ? [
          JSON.parse(polygon).coordinates[0].map((point: string[]) => ({
            lng: point[0],
            lat: point[1],
          })),
        ]
      : [{ lng: undefined, lat: undefined }];
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
        center={polygonArray[0][0]}
        zoomControl={true}
        mapTypeControl={true}
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
