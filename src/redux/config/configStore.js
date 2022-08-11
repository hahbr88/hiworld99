// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import HelloUserComment from "../modules/HelloUserComment";
import HelloWorld from "../modules/HelloWorld";
import inputSlice from "../modules/inputSlice";




export default configureStore({
  reducer: {
    users: HelloWorld,
    userComment: HelloUserComment,
    books: inputSlice,
  },
});

