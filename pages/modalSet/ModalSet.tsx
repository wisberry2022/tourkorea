import * as BS from '../../styles/Basic'
import * as MD from '../../styles/Modal'
import * as SI from '../../styles/signIn'
import { funcProps, includeCSSObj, messageProps } from '../../interfaceSet/Interface'
import { RootState } from '../../store/modules'
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux'
import { useInput } from '../../customHook/custom'
import axios from 'axios'

export const SignUpModal = ({ setSU }: funcProps<boolean>) => {
  const infoDesc = useSelector((state: RootState) => state.personInfo);
  const tagList: Array<includeCSSObj> = [
    { id: 1, width: '100%', name: 'id', type: 'text', placeholder: '아이디를 입력하세요' },
    { id: 2, width: '100%', name: 'pwd', type: 'password', placeholder: '비밀번호를 입력하세요' },
    { id: 3, width: '100%', name: 'email', type: 'email', placeholder: '이메일을 입력하세요' },
    { id: 4, width: '100%', name: 'tel', type: 'tel', placeholder: '연락처를 입력하세요' },
    { id: 5, width: '100%', name: 'address', type: 'address', placeholder: '주소지를 입력하세요' },
  ];
  const [signUpData, dispatch] = useInput();
  const [alert, setAlert] = useState<boolean>(false);
  const isAgree = useRef<HTMLInputElement>(null);

  const SignUp = (personInfo: boolean | undefined) => {
    if (personInfo) {
      console.log(signUpData);
      axios.post('/api/user/signup', signUpData);
    } else {
      setAlert(true);
    }
  }

  return (
    <MD.SignUpModal debug={false} isPosition='true' position='absolute' top='-26%' left='-63%' width='115rem' className="signupModal">
      <BS.Container debug={false} padding='5rem 3.5rem' width='100%'>
        <MD.ModalTitle>
          회원가입
        </MD.ModalTitle>
        <BS.BasicDiv className="signUpBox" debug={false} display='flex' gap='2.5rem' alignitems='flex-start' margin='0 0 5rem 0'>
          <BS.SubDiv className="mLeft" debug={false}>
            <BS.SubDiv className="inputBox">
              {tagList.map(it => (
                <SI.SignInput onChange={(e) => (dispatch({ type: 'ADD', event: e }))} key={it.id} name={it.name} width={it.width} type={it.type} placeholder={it.placeholder} />
              ))}
            </BS.SubDiv>
          </BS.SubDiv>
          <BS.BasicDiv className="mRight" display='flex' direction='column' gap='.5rem'>
            <BS.SubDiv>
              <BS.ScrollDiv isposition={true} isborder={true} border='.1rem solid #eee' height='20.5rem' bgcolor='#eee'>
                <MD.ModalSTitle issticky={true} isborder={true} bbottom='.1rem solid #fff' padding='.5rem 0' bgcolor='#eee'>개인정보 이용약관</MD.ModalSTitle>
                {infoDesc.content.map((it: string, idx: number) => (
                  <BS.Phase key={idx}>{it}</BS.Phase>
                ))}
              </BS.ScrollDiv>
            </BS.SubDiv>
            <BS.SubDiv display='flex' justifycontent='center' alignitems='center' gap='0'>
              <SI.SignInput debug={false} ref={isAgree} width='5%' type="checkbox" />
              <BS.Emphasize debug={false}>개인정보 이용약관에 동의합니다.</BS.Emphasize>
            </BS.SubDiv>
          </BS.BasicDiv>
        </BS.BasicDiv>
        <BS.ButtonBox debug={false} isflex={true} justifycontent='center' gap='2.5rem'>
          <BS.Button b_radius='2.5rem' bgcolor='#2BAE66' width='14rem' color='#fff' fontsize='1.6rem' onClick={() => (SignUp(isAgree.current?.checked))}>회원가입하기</BS.Button>
          <BS.Button onClick={() => setSU(false)} b_radius='2.5rem' border='.1rem solid #2BAE66' width='14rem' bgcolor='#fff' color='#2BAE66' fontsize='1.6rem' >취소하기</BS.Button>
        </BS.ButtonBox>
      </BS.Container>
      {alert ? <AlertModal setAlert={setAlert} MESSAGE='개인정보 이용약관에 동의해주세요!' /> : false}
    </MD.SignUpModal>
  )
}

interface userProps {
  setAlert: (x: boolean) => void
  MESSAGE: string
}

export const AlertModal = ({ setAlert, MESSAGE }: userProps) => {
  return (
    <MD.ErrorModal isPosition={true} width='30%'>
      <MD.ModalTitle marginbottom='3rem' fontsize='1.7rem'>{MESSAGE}</MD.ModalTitle>
      <BS.Button debug={false} b_radius='2.5rem' width='40%' fontsize='1.7rem' fontweight='600' bgcolor='#2BAE66' color='#fff' onClick={() => (setAlert(false))}>확인</BS.Button>
    </MD.ErrorModal>
  )
}