/* global kakao */
import * as BS from '../../styles/emotions/Basic';
import { useEffect } from 'react';
import Kakao from 'next-auth/providers/kakao';

declare global {
  interface Window {
    kakao: any;
  }
}

const Contents = () => {

  useEffect(() => {


  }, [])

  return (
    <BS.Section>
      <BS.BasicDiv id="map"></BS.BasicDiv>
    </BS.Section>
  )
}

export default Contents;