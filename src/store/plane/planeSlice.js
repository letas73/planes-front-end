import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import services from "../services/services";

export const getPlane = createAsyncThunk('plane/getPlane', async (id, thunkAPI) => {
  try {
    return await services.getPlane(id)
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

export const createPlane = createAsyncThunk('plane/createPlane', async (planeData, thunkAPI) => {
  try {
    return await services.createPlane(planeData)
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

const initialState = {
  plane: [],
  isError: false,
  isLoading: false,
  message: '',
  errors: null
}

export const planeSlice = createSlice({
  name: 'plane',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getPlane.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getPlane.fulfilled, (state, action) => {
      state.isLoading = false
      state.plane = action.payload[0]
    })
    builder.addCase(getPlane.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload.message
      state.plane = []
    })

    builder.addCase(createPlane.pending, (state) => {
      state.isLoading = true
      state.errors = null
    })
    builder.addCase(createPlane.fulfilled, (state, action) => {
      state.isLoading = false
      state.errors = null
      state.plane = action.payload[0]
    })
    builder.addCase(createPlane.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.errors = action.payload
    })
  }
})

export const { } = planeSlice.actions

export default planeSlice.reducer