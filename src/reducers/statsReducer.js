import { createSlice } from '@reduxjs/toolkit'

export const statsSlice = createSlice({
  name: 'stats',
  initialState: {
      backed: 0,
      goal: 100000,
      totalBackers: 0,
      daysLeft: 56
  },

  reducers: {
    addBacker: state => {
      state.totalBackers += 1;
    },

    addMoney: (state, action) => {
      state.backed += action.payload
    },
  }
})

export const { addBacker, addMoney } = statsSlice.actions;
export default statsSlice.reducer;