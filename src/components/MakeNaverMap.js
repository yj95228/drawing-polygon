import React, { useState, forwardRef, useImperativeHandle } from "react";

const {
  RenderAfterNavermapsLoaded,
  NaverMap,
  Marker,
  Polygon,
} = require("react-naver-maps");

const MakeNaverMap = forwardRef((props, ref) => {
  const navermaps = window.naver.maps;
  const [marker, setMarker] = useState([]);
  const drawMarker = (point) => {
    setMarker((marker) => [
      ...marker,
      { lng: point.coord.x, lat: point.coord.y },
    ]);
    props.getPolygon(
      (polygon) => `${polygon}, ${point.coord.x} ${point.coord.y}`
    );
  };
  const resetMarker = () => setMarker([]);
  useImperativeHandle(ref, () => ({
    setMarker: () => resetMarker(),
  }));
  console.log(marker);
  return (
    <RenderAfterNavermapsLoaded clientId={"jqe51ds7wm"}>
      <NaverMap
        id='maps-examples-polygon'
        style={{
          width: "100%",
          height: "65vh",
          marginLeft: "20px",
          marginRight: "20px",
        }}
        // default로 설정이 필요하다면
        // defaultCenter={[126.9783882, 37.5666103]}
        // defaultZoom={15}
        onClick={drawMarker}
      >
        {marker.map((point, index) => (
          <Marker
            key={index}
            position={new navermaps.LatLng(point.lat, point.lng)}
          />
        ))}
        {marker.length ? (
          <Polygon
            paths={[marker]}
            fillColor={"#ff0000"}
            fillOpacity={0.3}
            strokeColor={"#ff0000"}
            strokeOpacity={0.6}
            strokeWeight={3}
          />
        ) : null}
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
});

export default MakeNaverMap;
