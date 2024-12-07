import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'en'
}

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setLang } = langSlice.actions
export const langReducer = langSlice.reducer