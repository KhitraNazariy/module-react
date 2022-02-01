import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoItems: [],
        all: 0,
        completed: 0
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoItems.push({
                ...action.payload.data
            });

            state.all = state.all + 1;
        },
        deleteTodo: (state, action) => {
            state.todoItems = state.todoItems.filter(item => item.id !== action.payload.id);

            state.all = state.all - 1
        },
        changeStatus: (state, action) => {
            const obj = state.todoItems.find(item => item.id === action.payload.id);
            obj.status = !obj.status

            if (obj.status) {
                state.completed = state.completed + 1;
            } else (state.completed = state.completed - 1)
        }
    }
});

const todoReducer = todoSlice.reducer;

export const {addTodo, deleteTodo, changeStatus} = todoSlice.actions;

export default todoReducer;