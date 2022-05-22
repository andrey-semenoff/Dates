import { render, screen, fireEvent } from '@testing-library/react';
import CompanyTimeSlots from 'components/company-time-slots/company-time-slots';
import { Provider } from 'react-redux';
import store from 'store/store';
import { company } from '__tests__/mock_data/data';

describe('Company time slots', () => {
    it('should render company time slots', async () => {
        render(
            <Provider store={store}>
                <CompanyTimeSlots {...company} />
            </Provider>
        );
        expect(screen.getByText('Company 10')).toBeInTheDocument();
        expect(screen.getByText('No reservation')).toBeInTheDocument();
        expect(screen.getByText('Mon, 9 Jul')).toBeInTheDocument();
        expect(screen.getByText('Tue, 10 Jul')).toBeInTheDocument();
        expect(screen.getByText('08:00 - 09:00')).toBeInTheDocument();
        expect(screen.getByText('10:46 - 12:16')).toBeInTheDocument();
    });

    it('should handle onTimeSlotClick event', async () => {
        render(
            <Provider store={store}>
                <CompanyTimeSlots {...company} />
            </Provider>
        );
        fireEvent.click(screen.getByText('10:46 - 12:16'));
        expect(screen.getByText('Reservation')).toBeInTheDocument();
        expect(screen.getByText('Mon, 9 Jul 10:46 - 12:16')).toBeInTheDocument();

        fireEvent.click(screen.getByText('10:46 - 12:16'));
        expect(screen.getByText('No reservation')).toBeInTheDocument();
    });
});
