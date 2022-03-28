import React from "react";

const {
  RenderAfterNavermapsLoaded,
  NaverMap,
  Polygon,
} = require("react-naver-maps");

export const NaverAPIMap = ({ option, polygon }) => {
  const geoArray = option === 'WKT'
  ? polygon.map((geoPoints) => {
    const geoPoint = geoPoints.trim().split(" ");
    return { lng: geoPoint[0], lat: geoPoint[1] };
  })
  : polygon.map((geoPoints) => {
    return { lng: geoPoints[0], lat: geoPoints[1] };
  })
  // console.log(geoArray);
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
        center={geoArray[0]}
        zoom={15}
      >
        <Polygon
          paths={[geoArray]}
          fillColor={"#ff0000"}
          fillOpacity={0.3}
          strokeColor={"#ff0000"}
          strokeOpacity={0.6}
          strokeWeight={3}
        />
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
};

export default NaverAPIMap;
