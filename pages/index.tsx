import type { NextPage } from 'next'
import Total from './MainPage/Total'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { RootState } from '../store/modules';
import Sub from './tour/Sub';

interface gspProps {
  result?: JSON;
}

const Home: NextPage = () => {
  const { logState } = useSelector((state: RootState) => state.logState);
  console.log('HOME에서의 로그인 상태', logState);
  return (
    <>
      {
        logState ?
          <div className="Wrapper">
            <Sub />
          </div>
          :
          <div className="Wrapper">
            <Total />
          </div>
      }
    </>
  )
}

export async function getStaticProps() {
  // next.js 빌드 시 db연결
  let data = await axios.get('http://localhost:3000/api/dbCon');
  return {
    props: {
      result: data.data,
    }
  }
}

export default Home
