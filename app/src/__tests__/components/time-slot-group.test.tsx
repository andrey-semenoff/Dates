import { render, screen } from '@testing-library/react';
import TimeSlotGroup from 'components/time-slot-group/time-slot-group';
import { Provider } from 'react-redux';
import store from 'store/store';
import { company } from '../mock_data/data';

describe('Time slot group', () => {
    it('should render time slot group', async () => {
        render(
            <Provider store={store}>
                <TimeSlotGroup company_id={company.id} time_slots={company.time_slots} />
            </Provider>
        );
        expect(screen.getByText('Mon, 9 Jul')).toBeInTheDocument();
        expect(screen.getByText('10:46 - 12:16')).toBeInTheDocument();
    });
});
