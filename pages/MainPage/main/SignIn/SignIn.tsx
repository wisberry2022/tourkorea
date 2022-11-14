import * as Emo from '../../../../styles/Basic';

const SignIn = () => {
  return (
    <Emo.Section className="signIn">
      <Emo.PositionDiv position='absolute' top='50%' left='50%' transform={'translate(-50%, -50%)'} className="inner">
        <Emo.Container display={'flex'} gap={'.5rem'}>
          <div className="left">left</div>
          <div className="right">right</div>
        </Emo.Container>
      </Emo.PositionDiv>
    </Emo.Section>
  )
}

export default SignIn;