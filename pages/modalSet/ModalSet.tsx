import * as BS from '../../styles/Basic'
import * as MD from '../../styles/Modal'
import * as SI from '../../styles/signIn'
import { funcProps } from '../../interfaceSet/Interface'
import { useSelector } from 'react-redux/es/exports'

export const SignUpModal = ({ setSU }: funcProps) => {

  // const infoDesc = useSelector((state) => state.personInfo)

  return (
    <MD.SignUpModal debug={false} isPosition='true' position='absolute' top='-26%' left='-63%' width='115rem' className="signupModal">
      <BS.Container debug={false} padding='5rem 3.5rem' width='100%'>
        <MD.ModalTitle>
          회원가입
        </MD.ModalTitle>
        <BS.BasicDiv className="signUpBox" debug={false} display='flex' gap='2.5rem' alignitems='flex-start' margin='0 0 5rem 0'>
          <BS.SubDiv className="mLeft" debug={false}>
            <BS.SubDiv className="inputBox">
              <SI.SignInput width='100%' type="text" placeholder="아이디를 입력하세요" />
              <SI.SignInput width='100%' type="password" placeholder="패스워드를 입력하세요" />
              <SI.SignInput width='100%' type="email" placeholder="이메일을 입력하세요" />
              <SI.SignInput width='100%' type="tel" placeholder="연락처를 입력하세요" />
              <SI.SignInput width='100%' type="address" placeholder="주소지를 입력하세요" />
            </BS.SubDiv>
          </BS.SubDiv>
          <BS.BasicDiv debug={false} className="mRight" display='flex' direction='column' gap='.5rem'>
            <BS.SubDiv>
              <BS.ScrollDiv isposition={true} isborder={true} border='.1rem solid #eee' height='20.5rem'>
                <MD.ModalSTitle issticky={true} isborder={true} bbottom='.1rem solid #eee' padding='.5rem 0'>개인정보 이용약관</MD.ModalSTitle>
              </BS.ScrollDiv>
            </BS.SubDiv>
            <BS.SubDiv display='flex' justifycontent='center' alignitems='center' gap='0'>
              <SI.SignInput debug={false} width='5%' type="checkbox" />
              <BS.Emphasize debug={false}>개인정보 이용약관에 동의합니다.</BS.Emphasize>
            </BS.SubDiv>
          </BS.BasicDiv>
        </BS.BasicDiv>
        <BS.ButtonBox debug={false} isflex={true} justifycontent='center' gap='2.5rem'>
          <BS.Button b_radius='2.5rem' bgcolor='#2BAE66' width='14rem' color='#fff' fontsize='1.6rem'>회원가입하기</BS.Button>
          <BS.Button onClick={() => setSU(false)} b_radius='2.5rem' border='.1rem solid #2BAE66' width='14rem' bgcolor='#fff' color='#2BAE66' fontsize='1.6rem' >취소하기</BS.Button>
        </BS.ButtonBox>
      </BS.Container>

    </MD.SignUpModal>
  )
}