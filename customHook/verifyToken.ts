import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { CHANGE } from "../store/modules/logState";

export const useVerify = (accessToken: string) => {
  const dispatch = useDispatch();
  const [log, setLog] = useState<boolean>(false);

  const build = async () => {
    try {
      const result = await axios.get('/api/user/verify', {
        headers: {
          'JWT_ACCESS_TOKEN': accessToken,
        }
      })
      setLog(result.data.ResResult);
    } catch (error: any) {
      setLog(error.response.data.ResResult);
      dispatch(CHANGE([false, '']))
    }
  }

  build();

  return log;

} 