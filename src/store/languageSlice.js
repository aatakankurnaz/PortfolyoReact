import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'tr', 
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === 'en' ? 'tr' : 'en';
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    }
  }
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
