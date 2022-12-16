import { createSlice } from '@reduxjs/toolkit';
import { PROGRAMME_TAB } from './constants';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    activeTab: PROGRAMME_TAB,
  },
  reducers: {
    changeTab: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.activeTab = action.payload;
    },
  },
});

export const { changeTab } = dashboardSlice.actions;
export default dashboardSlice.reducer;
