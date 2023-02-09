import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import services from "../services/services";

export const getPlanes = createAsyncThunk('planes/getPlanes', async (_, thunkAPI) => {
  try {
    return await services.getPlanes()
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

const initialState = {
  planes: [],
  isError: false,
  isLoading: false,
  message: ''
}

export const planesSlice = createSlice({
  name: 'planes',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getPlanes.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getPlanes.fulfilled, (state, action) => {
      state.isLoading = false
      state.planes = action.payload
    })
    builder.addCase(getPlanes.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload.message
      state.planes = []
    })
  }
})

export const { } = planesSlice.actions

export default planesSlice.reducer