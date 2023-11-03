import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "Hello World!!!111",
};
const helloSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {
    setMessage(state, action){
      state.message = action.payload;
    }
  },
});

export const {setMessage} = helloSlice.actions;
export default helloSlice.reducer;