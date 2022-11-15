import * as Emo from '../../../styles/Basic';
import { dataObj } from '../../../interfaceSet/Interface';
import Link from 'next/link';
import { IoIosBookmark } from 'react-icons/io';
import { IoIosSearch } from 'react-icons/io';
import { IoMdLogIn } from 'react-icons/io';

const Header = () => {
  const navList: Array<dataObj> = [
    { id: 1, title: "myDibs", icon: <IoIosBookmark />, link: '/' },
    { id: 2, title: "search", icon: <IoIosSearch />, link: '/' },
    { id: 3, title: "signInOut", icon: <IoMdLogIn />, link: '/' },
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
              <li key={it.id}>
                <Link href={`${it.link}`}>
                  {it.icon}
                </Link>
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