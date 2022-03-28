import React, { useState } from 'react';

const {
  RenderAfterNavermapsLoaded,
  NaverMap,
  Marker,
  Polygon,
} = require("react-naver-maps");

export default function MakePolygon() {
  const navermaps = window.naver.maps;

  const [marker, setMarker] = useState([]);
  const [polygon, setPolygon] = useState('');
  const drawMarker = (point) => {
    setMarker(marker => [...marker, { lng: point.coord.x+'', lat: point.coord.y+'' }])
    setPolygon(polygon => polygon + ', ' + point.coord.x + ' ' + point.coord.y)
  };
  
  console.log(`POLYGON((${polygon.slice(2)}))`);
  
  return (
    <RenderAfterNavermapsLoaded clientId={"jqe51ds7wm"}>
      <NaverMap
        id="maps-examples-polygon"
        style={{
          width: "100%",
          height: "65vh",
          marginLeft: "20px",
          marginRight: "20px",
        }}
        // defaultCenter={[126.9783882, 37.5666103]}
        // defaultZoom={15}
        onClick={drawMarker}
      >
      {marker.map((point,index) =>
        <Marker
          key={index}
          position={new navermaps.LatLng(point.lat, point.lng)} />)}
      <Polygon
        paths={[marker]}
        fillColor={"#ff0000"}
        fillOpacity={0.3}
        strokeColor={"#ff0000"}
        strokeOpacity={0.6}
        strokeWeight={3}
      />
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  )
}