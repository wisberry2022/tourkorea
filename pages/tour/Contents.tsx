/* global kakao */
import * as BS from '../../styles/emotions/Basic';
import React, { useState, useEffect, useRef } from 'react';
import { PlaceInfoModal } from '../modalSet/ModalSet';
import { eventFunc } from '../../interfaceSet/funcInterface';

declare global {
  interface Window {
    kakao: any;
  }
}

const Contents = () => {
  const MapRef = useRef<HTMLDivElement>(null);
  const [uMap, setMap] = useState<any>(null);
  const [isModal, setModal] = useState<boolean>(false);
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

      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(35.1795543, 129.0756416),
      });

      setMap(map);

      window.kakao.maps.event.addListener(map, 'click', (e: React.BaseSyntheticEvent | any) => {
        console.log('kakao event 실행!');
        const latlng = e.latLng;
        marker.setMap(map);
        marker.setPosition(latlng);
        setModal(true);
      })

      window.kakao.maps.event.addListener(map, 'rightclick', (e: React.BaseSyntheticEvent | any) => {
        marker.setMap(null);
        setModal(false);
      })
    });
  }, [])


  const mapClick: eventFunc<void> = (e: React.MouseEvent) => {
    const criteriaSize: number = window.screen.availWidth / 2;
    const clickCoord: number = e.clientX;
    if (clickCoord > criteriaSize) {

    }
  }


  return (
    <>
      <BS.Section ref={MapRef} height='85vh' onClick={mapClick}>
        {isModal ? <PlaceInfoModal /> : null}
      </BS.Section>
    </>
  )
}

export default Contents;