import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Making an Api Call
export const fetchProducts = createAsyncThunk('getproducts', async (url, thunkApi) => {
    try {
        let response = await axios.get(url)
        let prodList = response.data
        return prodList
    } catch (err) {
        return thunkApi.rejectWithValue('Unable to get data')
    }
});

const productsSlice = createSlice({
    name: 'products',
    initialState:{ products: [], isPending: false, isError: false, errorMessage: '' },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.isPending = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isPending = false;
                state.isError = false;
                state.errorMessage = '';
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isError = true;
                state.isPending=false;
                state.errorMessage = action.payload;
            });
    }
});

export default productsSlice.reducer;
