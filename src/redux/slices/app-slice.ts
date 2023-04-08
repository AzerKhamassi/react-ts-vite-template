import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
  language: 'fr' | 'en',
  theme: 'dark' | 'light'
}

const initialState: AppState = {
  language: 'fr',
  theme: 'light'
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<'en' | 'fr'>) => {
      state.language = action.payload
    },
    toggleTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeLanguage, toggleTheme } = appSlice.actions

export default appSlice.reducer