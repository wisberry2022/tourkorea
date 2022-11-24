import { createSlice } from "@reduxjs/toolkit";

interface stateObj {
  logState: boolean;
  accessToken: string;
  provider: boolean;
}

interface actionObj {
  payload: Array<any>;
}

const initialState: stateObj = {
  logState: false,
  accessToken: '',
  provider: false,
};

const logSlice = createSlice({
  name: 'logState',
  initialState,
  reducers: {
    CHANGE: (state: stateObj, action: actionObj) => {
      const [log, token, provider] = action.payload;
      state.logState = log;
      state.accessToken = token;
      state.provider = provider;
    }
  }
})

export default logSlice.reducer;
export const { CHANGE } = logSlice.actions