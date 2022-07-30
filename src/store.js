import { configureStore } from '@reduxjs/toolkit';
import pledgeReducer from './reducers/pledgeReducer';
import statsReducer from './reducers/statsReducer';

export default configureStore({
  reducer: {
    pledge: pledgeReducer,
    stats: statsReducer
  }
});