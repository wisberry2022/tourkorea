import * as BS from '../../styles/emotions/Basic'
import * as MD from '../../styles/emotions/Modal'
import * as SI from '../../styles/emotions/signIn'
import { funcProps, includeCSSObj } from '../../interfaceSet/Interface'
import { SignUpType } from '../../interfaceSet/funcInterface'
import { RootState } from '../../store/modules'
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux'
import { useInput } from '../../customHook/custom'
import axios from 'axios'

interface userProps {
  setAlert: (x: Array<any>) => void
  MESSAGE: string
}

export const SignUpModal = ({ setSU, setSuccess }: funcProps<boolean>) => {
  const infoDesc = useSelector((state: RootState) => state.personInfo);
  const [signUpData, dispatch] = useInput('SignUp');
  const [alert, setAlert] = useState<Array<any>>([false, '']);
  const isAgree = useRef<HTMLInputElement>(null);
  const tagList: Array<includeCSSObj> = [
    { id: 1, width: '100%', name: 'id', type: 'text', placeholder: '아이디를 입력하세요' },
    { id: 2, width: '100%', name: 'pwd', type: 'password', placeholder: '비밀번호를 입력하세요' },
    { id: 3, width: '100%', name: 'email', type: 'email', placeholder: '이메일을 입력하세요' },
    { id: 4, width: '100%', name: 'tel', type: 'tel', placeholder: '연락처를 입력하세요' },
    { id: 5, width: '100%', name: 'address', type: 'address', placeholder: '주소지를 입력하세요' },
  ];

  const SignUp: SignUpType = (personInfo: boolean | undefined) => {
    console.log('회원가입 Reducer', signUpData);
    if (personInfo) {
      axios.post('/api/user/signup', signUpData)
        .then(() => (setSuccess(true), setSU(false)))
        .catch(res => {
          const errorSet = res.response.data;
          if (!errorSet.ResResult) {
            setAlert([true, errorSet.ERROR_MESSAGE])
          }
        });
    } else {
      setAlert([true, '개인정보 이용약관에 동의해주세요!']);
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
                <SI.SignInput onChange={(e: React.BaseSyntheticEvent) => (dispatch({ type: 'ADD', event: e }))} key={it.id} name={it.name} width={it.width} type={it.type} placeholder={it.placeholder} />
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
            <BS.SubDiv className="agreeBox" display='flex' justifycontent='center' alignitems='center' gap='0'>
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
      {alert[0] ? <AlertModal setAlert={setAlert} MESSAGE={alert[1]} /> : false}
    </MD.SignUpModal>
  )
}

export const AlertModal = ({ setAlert, MESSAGE }: userProps) => {
  return (
    <MD.ErrorModal isPosition={true} width='30%'>
      <MD.ModalTitle marginbottom='3rem' fontsize='1.7rem'>{MESSAGE}</MD.ModalTitle>
      <BS.Button debug={false} b_radius='2.5rem' width='40%' fontsize='1.7rem' fontweight='600' bgcolor='#2BAE66' color='#fff' onClick={() => (setAlert([false, '']))}>확인</BS.Button>
    </MD.ErrorModal>
  )
}

export const SuccessModal = ({ setSuccess }: funcProps<boolean>) => {
  return (
    <MD.BaseModal isPosition={true} position='absolute' top='-5%' left='-35%' border='.1rem solid #eee' padding='3rem 1.5rem' bgcolor='#fff' isRespon='sm'>
      <BS.CustomFigure margin='0 auto 3.5rem auto' width='35%' height='14rem' background={true} bgsize='cover' imgLink='../../assets/image/main/congratulation.png' ></BS.CustomFigure>
      <MD.ModalTitle marginbottom='1.5rem' fontsize='2.3rem'>
        회원가입 성공!
      </MD.ModalTitle>
      <BS.Phase align='center'>
        투어코리아에 오신 것을 환영합니다! <br />
        어서 빨리 여행지를 찾으러가요!
      </BS.Phase>
      <BS.Button margin='0 0 0 43%' b_radius='2.5rem' width='13%' fontsize='1.5rem' bgcolor='#2BAE66' color='#fff' onClick={() => (setSuccess(false))}>확인</BS.Button>
    </MD.BaseModal>
  )
}