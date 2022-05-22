import { configureStore } from '@reduxjs/toolkit';
import timeSlotsSlice from 'store/features/timeSlots';

const store = configureStore({
    reducer: {
        timeSlots: timeSlotsSlice
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
