import { render, screen } from '@testing-library/react';
import TimeSlotElement from 'components/time-slot/time-slot';
import { Provider } from 'react-redux';
import store from 'store/store';
import { timeSlotsData } from '../mock_data/data';

describe('Time slot', () => {
    it('should render time slot: normal state', async () => {
        const { container } = render(
            <Provider store={store}>
                <TimeSlotElement {...timeSlotsData[0]} />
            </Provider>
        );
        expect(screen.getByText('08:00 - 09:30')).toBeInTheDocument();
        expect(container.querySelector('.timeSlot')).toBeInTheDocument();
        expect(container.querySelector('.timeSlot.selected')).not.toBeInTheDocument();
        expect(container.querySelector('.timeSlot.disabled')).not.toBeInTheDocument();
    });

    it('should render time slot: normal state', async () => {
        const { container } = render(
            <Provider store={store}>
                <TimeSlotElement {...timeSlotsData[1]} />
            </Provider>
        );
        expect(screen.getByText('08:00 - 09:30')).toBeInTheDocument();
        expect(container.querySelector('.timeSlot.selected')).toBeInTheDocument();
        expect(container.querySelector('.timeSlot.disabled')).not.toBeInTheDocument();
    });

    it('should render time slot: normal state', async () => {
        const { container } = render(
            <Provider store={store}>
                <TimeSlotElement {...timeSlotsData[2]} />
            </Provider>
        );
        expect(screen.getByText('08:00 - 09:30')).toBeInTheDocument();
        expect(container.querySelector('.timeSlot.disabled')).toBeInTheDocument();
        expect(container.querySelector('.timeSlot.selected')).not.toBeInTheDocument();
    });
});
