import { Button } from '@geist-ui/core';
import { Sun, Moon } from '@geist-ui/icons';
import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'light',
  },
  reducers: {
    toggle: (state) => {
      state.value = (state.value === 'light') ? 'dark' : 'light';
    }
  }
})

export { themeSlice.reducer };

export default function Bar(props) {
  const { toggle } = themeSlice.actions;
  return (
    <div className="bar">
      <Button icon={(themeType === 'light') ? <Sun /> : <Moon />} onClick={toggle}>{themeType}</Button>
    </div>
  )
}