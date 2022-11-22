import { createSlice } from "@reduxjs/toolkit";

interface stateObj {
  logState: boolean;
  accessToken: string;
}

interface actionObj {
  payload: Array<any>;
}

const initialState: stateObj = {
  logState: false,
  accessToken: ''
};

const logSlice = createSlice({
  name: 'logState',
  initialState,
  reducers: {
    CHANGE: (state: stateObj, action: actionObj) => {
      const [log, token] = action.payload;
      state.logState = log;
      state.accessToken = token;
    }
  }
})

export default logSlice.reducer;
export const { CHANGE } = logSlice.actions