import type { NextPage } from 'next'
import Total from './MainPage/Total'
import axios from 'axios'
import { useEffect } from 'react';
import { sessionData } from '../interfaceSet/Interface';
import { useSession } from 'next-auth/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/modules';
import { CHANGE } from '../store/modules/logState';
import Sub from './tour/Sub';

interface gspProps {
  result?: JSON;
}

const Home: NextPage = () => {
  const { data: session }: sessionData = useSession();
  const { logState, provider } = useSelector((state: RootState) => state.logState);
  const dispatch = useDispatch();
  console.log('여기는 index.tsx!');

  useEffect(() => {
    if (session) {
      dispatch(CHANGE([session.logState, session.token, true]))
    } else if (session === null && provider) {
      dispatch(CHANGE([false, '', false]))
    }
  }, [])

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
