import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = process.env.REACT_APP_USRL

export const sandComments = createAsyncThunk(
  "userComment/sandComments",
  async (payload, thunkAPI) => {
    const resdata = await axios
      .post( URL + "userComment", {
        userComment: payload.Comment.userComment,
        id: payload.userid,
        postid: payload.id,
      })
      .then((res) => res.data)
      .catch((error) => error);
    return thunkAPI.fulfillWithValue(resdata);
  }
);

export const getComments = createAsyncThunk(
  "userComment/getComments",
  async (payload, thunkAPI) => {
    const resdata = await axios
      .get (URL+"userComment", {})
      .then((res) => res.data)
      .catch((error) => error);
    return thunkAPI.fulfillWithValue(resdata);
  }
);
//서버 관련
export const deletComments = createAsyncThunk(
  "userComment/deletComments",
  async ( id , thunkAPI) => {
    const resdata = await axios
    .delete( URL + `userComment/${id}`)
      .then((res) => ({id}))
      .catch((error) => error);
    return thunkAPI.fulfillWithValue(resdata);
    
  }
);

const HelloUserComment = createSlice({
  name: "userComment",
  initialState: {
    userComment: [],
  },
  reducers: {},
  //슬라이스를 건드림 extraReducers 영향이 있다
  extraReducers: {
    [getComments.fulfilled]: (state, action) => {
      state.userComment = action.payload;
    },
    [sandComments.fulfilled]: (state, action) => {
      state.userComment = [...state.userComment,action.payload];
    },
    [deletComments.fulfilled]: (state, action) => {
      state.userComment=state.userComment.filter((postid) => postid.id !== action.payload.id)
      // state == initialState
    },
  },
});

export default HelloUserComment.reducer;


