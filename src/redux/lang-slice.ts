import { createSlice } from '@reduxjs/toolkit'
import { languages } from '@/utils/languages'

const initialState = {
  value: languages.getLangFromLocalStorage() || 'en'
}

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.value = action.payload
      languages.setLangToLocalStorage(action.payload)
    }
  }
})

export const { setLang } = langSlice.actions
export const langReducer = langSlice.reducer