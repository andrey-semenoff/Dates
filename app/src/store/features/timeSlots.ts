import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { TypeSlotSelected } from 'models/company';

interface TimeSlotsState {
    selectedSlots: TypeSlotSelected[];
}

const initialState: TimeSlotsState = {
    selectedSlots: []
};

const timeSlotsSlice: Slice<TimeSlotsState> = createSlice({
    name: 'timeSlotsSlice',
    initialState,
    reducers: {
        addTimeSlot: (state: TimeSlotsState, action: PayloadAction<TypeSlotSelected>) => {
            state.selectedSlots.push(action.payload);
        },
        replaceTimeSlot: (state: TimeSlotsState, action: PayloadAction<TypeSlotSelected>) => {
            const idx = state.selectedSlots.findIndex(
                (ts) => ts.company_id === action.payload.company_id
            );
            state.selectedSlots[idx] = action.payload;
        },
        removeTimeSlot: (state: TimeSlotsState, action: PayloadAction<TypeSlotSelected>) => {
            const { id, company_id } = action.payload;
            const idx = state.selectedSlots.findIndex(
                (ts) => ts.company_id === company_id && ts.id === id
            );
            state.selectedSlots.splice(idx, 1);
        }
    }
});

export const { addTimeSlot, replaceTimeSlot, removeTimeSlot } = timeSlotsSlice.actions;

export default timeSlotsSlice.reducer;
