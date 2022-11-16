import * as BS from '../../../styles/Basic';
import * as Custom from '../../../styles/footerStyle';
import { dataObj } from '../../../interfaceSet/Interface';
import Link from 'next/link';
import { SiYoutube, SiFacebook, SiInstagram } from "react-icons/si";

const Footer = () => {
  const leftList: Array<dataObj> = [
    { id: 1, title: '회사소개', link: '/' },
    { id: 2, title: '사회공헌', link: '/' },
    { id: 3, title: '여행약관', link: '/' },
    { id: 4, title: '서비스이용약관', link: '/' },
    { id: 5, title: '개인정보 처리방침', link: '/' },
    { id: 7, title: 'TourKorea', link: '/' },
  ];

  const rightList: Array<dataObj> = [
    { id: 1, title: 'instagram', icon: <SiInstagram />, link: 'https://www.instagram.com/' },
    { id: 2, title: 'facebook', icon: <SiFacebook />, link: 'https://ko-kr.facebook.com/' },
    { id: 3, title: 'youtube', icon: <SiYoutube />, link: 'https://www.youtube.com/' },
  ];

  return (
    <BS.Footer>
      <BS.Container display='flex' justifycontent='space-between'>
        <BS.RowFlexUl className="left" gap='2.5rem' >
          {leftList.map(it => (
            <li key={it.id}>
              <Link href={`${it.link}`} >
                {it.title}
              </Link>
            </li>
          ))}
        </BS.RowFlexUl>
        <BS.RowFlexUl className="right" gap='1.5rem'>
          {rightList.map(it => (
            <li key={it.id}>
              <Link href={`${it.link}`} target="_blank">
                {it.icon}
              </Link>
            </li>
          ))}
        </BS.RowFlexUl>
      </BS.Container>

    </BS.Footer >
  )
}

export default Footer;