import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const URL = process.env.REACT_APP_USRL

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  
  return await axios
    .get( URL+"books")
    .then((res) => res.data)
    .catch((error) => error);
});

export const patchUpdateThunk = createAsyncThunk(
  "users/patchUpdateThunk",
  async (payload, thunkAPI) => {
    const resdata = await axios
      .patch( URL + `books/${payload.id}`, {
        content: payload.updated.updateComment,
      })
      .then((res) => res.data )
      .catch((error) => error);
    return thunkAPI.fulfillWithValue(resdata);
  }
);

const HelloWorld = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: "" 
  },
  reducers: {},
  extraReducers: {
    // createAsyncThunk 했을때 약속 
    // pendign : 비동기 작업을 시작했을때 상태
    [fetchUser.pending]: (state) => {
      state.loading = false;
      state.users = [];
      state.error = "";
    },
    // fulfilled : 비동기 작업이 끝났을때 상태(데이터를 자져왔을때)
    [fetchUser.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = true;
      state.error = "";
    },
    //rejected: 오류가 생겨서 중단 됐을때 
    // [fetchUser.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.users = [];
    //   state.error = action.payload;
    // },
    [patchUpdateThunk.fulfilled]: (state, action) => {

      const data = state.users.find((postid) => postid.id == action.payload.id)
      data.content = action.payload.content 

    },
  }
});

export default HelloWorld.reducer;

// type: 'users/patchUpdateThunk/fulfilled', payload: {…}, meta: {…}}
// meta: {arg: {…}, requestId: 'ylDDiCCi29GSbNErz8K3d', requestStatus: 'fulfilled'}
// payload:
// content: "234"
// id: "fd8c6e3d-1fdc-4bc4-8ab2-58aff269b00f"
// name: "ads"
// title: "asd"
// [[Prototype]]: Object
// type: "users/patchUpdateThunk/fulfilled"