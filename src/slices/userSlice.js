import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Making an Api Call
export const fetchUsers = createAsyncThunk('getUsers', async (url, thunkApi) => {
    try {
        let response = await axios.get(url)
        let usersList = response.data
        return usersList
    } catch (err) {
        return thunkApi.rejectWithValue('Unable to get data')
    }
});

const userSlice = createSlice({
    name: 'users',
    initialState:{ users: [], isPending: false, isError: false, errorMessage: '' },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.isPending = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.isPending = false;
                state.isError = false;
                state.errorMessage = '';
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isError = true;
                state.isPending=false;
                state.errorMessage = action.payload;
            });
    }
});

export default userSlice.reducer;
