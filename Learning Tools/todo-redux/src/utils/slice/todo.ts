import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit"

export interface Todo {
        userId: number,
        id: number,
        title: string,
        completed: boolean
}

export interface Data {
        isLoading: boolean,
        data: Array<Todo>,
        isError: boolean
}

export const showTodos = createAsyncThunk("showTodo", async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
        return response.json();
});

const defaultState:Data = {
        isLoading: true,
        isError: false,
        data: [
                {
                        userId: 1,
                        id: 1,
                        title: "delectus aut autem",
                        completed: false
                }
        ]
}

const todoSlice = createSlice({
        name: "Todo",
        initialState: defaultState,
        reducers:{},
        extraReducers: (builder) => {
                builder.addCase(showTodos.pending, (state:Data) => {
                        state.isLoading = true;
                });

                builder.addCase(showTodos.fulfilled, (state:Data, action:PayloadAction<Array<Todo>>) => {
                        state.isLoading = false;
                        state.data = action.payload;
                });

                builder.addCase(showTodos.rejected, (state:Data) => {
                        state.isLoading = false;
                        state.isError = true;
                });
        }
});


export default todoSlice;