import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../Pages/Dashboard/dashboardSlice';

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});

export default store;
