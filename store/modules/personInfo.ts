import { createSlice } from "@reduxjs/toolkit";

export interface stateObj {
  id?: number;
  content?: string;
}

const initialState: stateObj = {
  id: 1,
  content:
    '(1) 회사는 최초 회원 가입시 원활한 고객상담, 서비스 제공을 위해 아래와 같은 최소한의 개인정보를 필수항목으로 수집하고 있습니다. \n 필수항목 : 이메일 주소, 이름(닉네임), 비밀번호 \n 선택항목 : 프로필 사진, 회사/단체 이름, 회사/단체 규모, 산업군, 부서, 유형(개인/기업/단체), 지역, 전화번호 등 \n\n(2) 소셜 계정을 통해 회원가입 시 아래와 같은 정보들이 추가로 수집될 수 있습니다. \n 네이버 : 프로필 사진, 나이 \n 페이스북 : 프로필 사진 \n 구글 : 프로필 사진 \n\n (3) 서비스 이용 과정이나 사업처리 과정에서 아래와 같은 정보들이 추가로 수집될 수 있습니다. \n 거래정보 : 개인의 경우 생년월일(정기결제에 한함), 신용카드정보(신용카드번호, 유효기간, 비밀번호 앞 두 자리), 세금계산서 발행을 위한 회계 담당자 정보(이름, 연락처, 이메일주소) 등 \n 서비스 이용 정보 : 서명 요청자 및 참여자 정보 (이름, 이메일 주소, 전화번호), 전화번호, IP 주소, 쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록, 브라우저 정보, 운영체제 정보(OS), 사용 기기 정보, MAC 주소, 방문 일시 등'
};

const infoSlice = createSlice({
  name: 'personInfo',
  initialState,
  reducers: {
    GET: state => { return state }
  }
})

export default infoSlice.reducer;