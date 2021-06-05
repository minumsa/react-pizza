import React, { useEffect } from "react";

const { kakao } = window;

function MapAPI() {
  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(37.6019681, 127.0247518),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(37.6019681, 127.0247518);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  })

  return (
    <div id='myMap' style={{
      width: '500px',
      height: '500px'
    }}></div>
  );
}

export default MapAPI;