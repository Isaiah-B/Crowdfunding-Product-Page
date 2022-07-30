import { createSlice } from '@reduxjs/toolkit'

const bambooDescription = "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
const blackDescription = "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
const mahoganyDescription = "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."

export const pledgeSlice = createSlice({
  name: 'pledge',
  initialState: {
    items: [
      { 
        id:1, 
        title: 'Bamboo Stand',
        amount: 25,
        rewardsRemaining: 101,
        description: bambooDescription, 
      },
      { 
        id:2, 
        title: 'Black Edition Stand',
        amount: 75,
        rewardsRemaining: 64,
        description: blackDescription, 
      },
      { 
        id:3, 
        title: 'Mahogany Special Edition',
        amount: 200,
        rewardsRemaining: 5,
        description: mahoganyDescription, 
      },
    ],

    selected: -1,
  },

  reducers: {
    decrementReward: (state, action) => {
      const pledge = state.items.find(p => p.id === action.payload);
      pledge.rewardsRemaining -= 1;
    },

    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  }
})

export const { decrementReward, setSelected, getSelected } = pledgeSlice.actions;
export default pledgeSlice.reducer;