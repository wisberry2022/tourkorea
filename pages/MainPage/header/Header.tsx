import * as Emo from '../../../styles/emotions/Basic';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { dataObj } from '../../../interfaceSet/Interface';
import { IoIosBookmark, IoIosSearch, IoIosKeypad, IoIosLogIn, IoIosContact, IoIosPaper, IoIosInformationCircleOutline, IoMdSettings, IoIosLogOut } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/modules';
import { CHANGE } from '../../../store/modules/logState';
import { signOut, useSession } from 'next-auth/react';
import { useVerify } from '../../../customHook/verifyToken';

interface childProps {
  id: string;
}

const DropMenu = ({ id }: childProps) => {
  const { logState, accessToken, provider } = useSelector((state: RootState) => (state.logState));
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const NLdropList: dataObj = { id: 1, title: '로그인 해주세요', icon: <IoIosLogIn /> }
  const dropList: Array<dataObj> = [
    { id: 1, title: id, icon: <IoIosContact />, link: '/' },
    { id: 2, title: '마이페이지', icon: <IoIosPaper />, link: '/' },
    { id: 3, title: '도움말', icon: <IoIosInformationCircleOutline />, link: '' },
    { id: 4, title: '설정', icon: <IoMdSettings />, link: '' },
    { id: 5, title: '로그아웃', icon: <IoIosLogOut />, link: '' },
  ];

  const SignOut = () => {
    if (provider) {
      signOut();
    } else {
      dispatch(CHANGE([false, '', false]))
    }
  }

  return (
    <Emo.PositionDiv className="dropMenu" position='absolute' left='50%' transform="translateX(-50%)" width='15rem' zIndex='999' border='.1rem solid #ddd'>
      <Emo.BasicDiv className="totalBox">
        {logState ?
          dropList.map(it => (
            <Emo.SubDiv className="listBox" key={it.id} onClick={() => (it.title === '로그아웃' ? SignOut() : false)}>
              <Link href={`${it.link}`}>
                {it.icon}
                <Emo.PlainStrong>{it.title}</Emo.PlainStrong>
              </Link>
            </Emo.SubDiv>
          )) :
          <Emo.SubDiv className="listBox unLogin">
            <Emo.PlainStrong>{NLdropList.title}</Emo.PlainStrong>
          </Emo.SubDiv>
        }
      </Emo.BasicDiv>
    </Emo.PositionDiv>
  )
}

const Header = () => {
  const { accessToken } = useSelector((state: RootState) => (state.logState));
  const uid: string = useVerify(accessToken, 'uid') as string;

  console.log('Header에서의 id', uid)
  const [isDrop, setDrop] = useState(false)

  const navList: Array<dataObj> = [
    { id: 1, title: "myDibs", icon: <IoIosBookmark />, link: '/' },
    { id: 2, title: "search", icon: <IoIosSearch />, link: '/' },
    { id: 3, title: "myPage", icon: <IoIosKeypad />, link: '' },
  ]

  return (
    <header>
      <nav>
        <Emo.Container display='flex' justifycontent='space-between'>
          <h1>
            <Link href="/">
              투어 코리아
            </Link>
          </h1>
          <Emo.RowFlexUl className="sideBar">
            {navList.map(it =>
            (
              <li key={it.id} onClick={() => (it.id === 3 ? setDrop(prev => !prev) : false)}>
                <Link href={`${it.link}`}>
                  {it.icon}
                </Link>
                {isDrop && it.id === 3 ? <DropMenu id={uid} /> : null}
              </li>
            )
            )}
          </Emo.RowFlexUl>
        </Emo.Container>
      </nav>
    </header>
  )
}

export default Header;