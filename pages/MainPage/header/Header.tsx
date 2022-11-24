import * as Emo from '../../../styles/emotions/Basic';
import Link from 'next/link';
import { useState } from 'react';
import { dataObj } from '../../../interfaceSet/Interface';
import { IoIosBookmark, IoIosSearch, IoIosKeypad, IoIosLogIn, IoIosContact, IoIosPaper, IoIosInformationCircleOutline, IoMdSettings, IoIosLogOut } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/modules';
import { CHANGE } from '../../../store/modules/logState';
import { signOut } from 'next-auth/react';

const DropMenu = () => {
  const { logState, provider } = useSelector((state: RootState) => (state.logState));
  const dispatch = useDispatch();
  console.log('header에서 보는 logState', logState);
  const NLdropList: dataObj = { id: 1, title: '로그인 해주세요', icon: <IoIosLogIn /> }
  const dropList: Array<dataObj> = [
    { id: 1, title: '', icon: <IoIosContact />, link: '/' },
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
    <Emo.PositionDiv className="dropMenu" debug={true} position='absolute' zIndex='999'>
      <Emo.ColFlexUl customlist={true}>
        {logState ?
          dropList.map(it => (
            <Emo.CustomLI key={it.id} onClick={() => (it.title === '로그아웃' ? SignOut() : false)}>
              {it.title}
            </Emo.CustomLI>
          )) :
          <Emo.CustomLI>
            {NLdropList.title}
          </Emo.CustomLI>
        }
      </Emo.ColFlexUl>
    </Emo.PositionDiv>
  )
}

const Header = () => {
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
                {isDrop && it.id === 3 ? <DropMenu /> : null}
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