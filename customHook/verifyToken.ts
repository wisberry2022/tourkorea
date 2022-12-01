import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { CHANGE } from "../store/modules/logState";
import { useType } from "../interfaceSet/Interface";

export const useVerify = (accessToken: string, dataType: useType = false) => {

  const dispatch = useDispatch();
  const [rData, setData] = useState<string>('')
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

  if (!dataType) {
    build();
    return log;
  } else if (dataType === 'uid') {
    axios.get('/api/user/verify', {
      headers: {
        'JWT_ACCESS_TOKEN': accessToken,
      }
    })
      .then((res) => setData(res.data.ResData.uid))
      .catch(() => setData('token expired'))
    return rData;
  } else if (dataType === 'email') {
    axios.get('/api/user/verify', {
      headers: {
        'JWT_ACCESS_TOKEN': accessToken,
      }
    })
      .then((res) => setData(res.data.ResData.email))
      .catch(() => setData('token expired'))
    return rData;
  }
} 