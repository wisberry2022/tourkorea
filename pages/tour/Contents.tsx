import { signOut } from "next-auth/react";
import { useDispatch } from "react-redux";
import { CHANGE } from "../../store/modules/logState";

const Contents = () => {
  const dispatch = useDispatch();
  const SocialSignOut = async () => {
    signOut();
  }

  return (
    <div>
      hello
      <button onClick={() => (SocialSignOut())}>로그아웃</button>
    </div>
  )
}

export default Contents;