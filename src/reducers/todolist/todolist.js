import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Api = "https://663f7189e3a7c3218a4d153c.mockapi.io/Example/api/Sanduk";

export const getRukovodstva = createAsyncThunk(
  "sanduk/getRukovodstva",
  async function () {
    try {
      let { data } = await axios.get(`${Api}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getByIdRukovodstva = createAsyncThunk(
  "sanduk/getByIdRukovodstva",
 async  function (id) {
    try {
      let { data } = await axios.get(`${Api}/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const counterSlice = createSlice({
  name: "sanduk",
  initialState: {
    data: [],
    byId:[],
  },
  extraReducers: (builder) => {
    builder.addCase(getRukovodstva.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getByIdRukovodstva.fulfilled, (state, action) => {
      state.byId = action.payload;  
    });
  },
});

export const {} = counterSlice.actions;
export default counterSlice.reducer;