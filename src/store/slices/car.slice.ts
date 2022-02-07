import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces";
import {carService} from "../../services";

interface ICarState {
    cars: ICar[],
    update: ICar | null
}

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {dispatch}) => {
        const {data} = await carService.getAll();
        dispatch(setCars({cars: data}))
    }
);

const initialState: ICarState = {
    cars: [],
    update: null
}

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, action:PayloadAction<{cars: ICar[]}>) => {
            state.cars = action.payload.cars
        }
    }
});
const carReducer = carSlice.reducer;

export default carReducer;

export const {setCars} = carSlice.actions;