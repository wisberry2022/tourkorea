/* global kakao */
import * as BS from '../../styles/emotions/Basic';
import React, { useState, useEffect, useRef } from 'react';
import { eventFunc } from '../../interfaceSet/funcInterface';

declare global {
  interface Window {
    kakao: any;
  }
}

const Contents = () => {
  const MapRef = useRef<HTMLDivElement>(null);
  const [uMap, setMap] = useState<any>(null);
  useEffect(() => {
    window.kakao.maps.load(() => {
      const option = {
        center: new window.kakao.maps.LatLng(35.1795543, 129.0756416),
        level: 4,
      }
      const map = new window.kakao.maps.Map(MapRef.current, option);
      setMap(map);
      const control = new window.kakao.maps.ZoomControl();
      map.addControl(control, window.kakao.maps.ControlPosition.TOPRIGHT);
      map.setZoomable(false);
    });
  }, [])

  const mapClick: eventFunc<void> = () => {
    const marker = new window.kakao.maps.Marker({
      position: uMap.getCenter(),
    });
    marker.setMap(uMap);

    window.kakao.maps.event.addListener(uMap, 'click', (e: React.BaseSyntheticEvent | any) => {
      console.log(e);
      const latlng = e.latLng;
      marker.setPosition(latlng);
    })
  }

  return (
    <>
      <BS.Section ref={MapRef} height='85vh' onClick={() => { mapClick() }}>
      </BS.Section>
    </>
  )
}

export default Contents;