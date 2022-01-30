import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../services/user.service";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await userService.getAll();
            return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

const userReducer = userSlice.reducer;

export default userReducer;