import React from "react";

const {
  RenderAfterNavermapsLoaded,
  NaverMap,
  Polygon,
} = require("react-naver-maps");

export const NaverAPIMap = (props) => {
  return (
    <RenderAfterNavermapsLoaded clientId={"jqe51ds7wm"}>
      <NaverMap
        id="maps-examples-polygon"
        style={{
          width: "100%",
          height: "400px",
        }}
        defaultCenter={{ lat: 37.3674001, lng: 127.1181196 }}
        defaultZoom={13}
      >
        <Polygon
          paths={[
            [
              { lat: 37.37544345085402, lng: 127.11224555969238 },
              { lat: 37.37230584065902, lng: 127.10791110992432 },
              { lat: 37.35975408751081, lng: 127.10795402526855 },
              { lat: 37.359924641705476, lng: 127.11576461791992 },
              { lat: 37.35931064479073, lng: 127.12211608886719 },
              { lat: 37.36043630196386, lng: 127.12293148040771 },
              { lat: 37.36354029942161, lng: 127.12310314178465 },
              { lat: 37.365211629488016, lng: 127.12456226348876 },
              { lat: 37.37544345085402, lng: 127.11224555969238 },
            ],
          ]}
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
