import type { NextPage } from 'next'
import Total from './MainPage/Total'
import axios from 'axios'

interface gspProps {
  result?: JSON;
}

const Home: NextPage = () => {
  return (
    <div>
      <Total />
    </div>
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
