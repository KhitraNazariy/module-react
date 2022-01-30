import {configureStore} from "@reduxjs/toolkit";

import userReducer from "./user.slice";
import postReducer from "./post.slice";
import commentReducer from "./comment.slice";

export const store = configureStore({
    reducer: {
        userReducer,
        postReducer,
        commentReducer
    }
})