/**@jsxImportSource @emotion/react */
import { includeCSSObj } from '../../../../interfaceSet/Interface';
import { useMediaQuery } from 'react-responsive';
import * as Emo from '../../../../styles/Basic';
import * as Style from '../../../../styles/signIn';

const Left = () => {
  return (
    <Emo.BasicDiv debug={false} width='40%' className="left">
      <Emo.CustomFigure debug={false} width='100%' height='30rem' background={true} imgLink='../assets/logo/logo.png'></Emo.CustomFigure>
      <Emo.Description debug={false}>
        <Style.Title>
          방구석에서 여행지 찾기!
        </Style.Title>
        <Style.Phase>
          여행은 가고 싶은데 어디로 가야 할 지 모르겠다구요?<br />
          여행 가기 전에 계획을 세우시는 편이시라구요? <br />
          어디에 무슨 관광지가 있는지 알고싶으시다구요? <br />
          이제는 헤매지 말고 투어코리아에서! <br />
        </Style.Phase>
      </Emo.Description>
      <Style.ButtonBox>
        <Emo.Button b_radius='5rem' bgcolor='#2BAE66' color='#fff'>로그인하기</Emo.Button>
        <Emo.Button b_radius='5rem' border='0.1rem solid #2BAE66' bgcolor='#fff' color='#2BAE66'>서비스 설명</Emo.Button>
      </Style.ButtonBox>
    </Emo.BasicDiv>
  )
}

const Right = () => {
  const socialList: Array<includeCSSObj> = [
    { id: 1, title: '네이버 로그인', icon: '../assets/logo/social_01.png', bgColor: '#03C75A', color: '#fff', border: 'none' },
    { id: 2, title: '카카오 로그인', icon: '../assets/logo/social_02.png', bgColor: '#FDDC3F', color: '#111', border: 'none' },
    { id: 3, title: 'Google 로그인', icon: '../assets/logo/social_03.png', bgColor: '#fff', color: '#111', border: '0.1rem solid #eee' },
  ]

  return (
    <Emo.BasicDiv width='60%' className="right">
      <Style.TopDiv className="top">
        <Emo.BasicDiv className="inputBox">
          <Emo.SubDiv className="itmBox">
            <Style.FormLabel marginright='57.5rem' htmlFor="id">아이디</Style.FormLabel>
            <Style.SignInput type="text" id="id" placeholder="아이디를 입력하세요" required />
          </Emo.SubDiv>
          <Emo.SubDiv className="itmBox">
            <Style.FormLabel marginright='56.5rem' htmlFor="pwd">비밀번호</Style.FormLabel>
            <Style.SignInput type="password" id="pwd" placeholder="패스워드를 입력하세요" required />
          </Emo.SubDiv>
        </Emo.BasicDiv>
        <Emo.BasicDiv className="signBox">
          <Style.ButtonBox column={true}>
            <Emo.Button width='100%' height='4.5rem' bgcolor='#2BAE66' color='#fff' fontsize='1.8rem'>로그인하기</Emo.Button>
            <Emo.RowFlexUl customlist={true} listdisplay='flex' listgap='4rem' gap='1.5rem' listjustify='center' className="socialLogin">
              {socialList.map(it => (
                <li key={it.id} className="subList" style={{ border: it.border, backgroundColor: it.bgColor, color: it.color }}>
                  <Emo.CustomFigure margin='.2rem 0 0 0' width='3rem' height='3rem' background={true} imgLink={it.icon}></Emo.CustomFigure>
                  <Emo.Emphasize>{it.title}</Emo.Emphasize>
                </li>
              ))}
            </Emo.RowFlexUl>

          </Style.ButtonBox>
          <Emo.SubDiv className="socialSet">
          </Emo.SubDiv>
        </Emo.BasicDiv>
      </Style.TopDiv>
      <Style.BottomDiv className="bottom">
        <Emo.BasicDiv className="signInfo">
          <Emo.SemiPhase cursor={true}>회원가입하기</Emo.SemiPhase>
          <Emo.SemiPhase cursor={true}>아이디, 비밀번호를 잊었다면?</Emo.SemiPhase>
        </Emo.BasicDiv>
      </Style.BottomDiv>
    </Emo.BasicDiv>
  )
}

const SignIn = () => {
  return (
    <Emo.Section className="signIn">
      <Emo.PositionDiv position='absolute' top='200%' left='50%' transform='translate(-50%, -50%)' className="inner">
        <Emo.Container display='flex' gap='0' width='120rem' className="totalBox">
          <Left />
          <Right />
        </Emo.Container>
      </Emo.PositionDiv>
    </Emo.Section>
  )
}

export default SignIn;