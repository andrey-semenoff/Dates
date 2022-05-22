import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store/store';
import ReservationsTable from 'components/reservations-table/reservations-table';

describe('Reservation table', () => {
    it('should render reservation table', async () => {
        render(
            <Provider store={store}>
                <ReservationsTable />
            </Provider>
        );

        await waitFor(() => {
            expect(screen.getByText('Company 1')).toBeInTheDocument();
        });
        expect(screen.getByText('Company 2')).toBeInTheDocument();
        expect(screen.getByText('Company 3')).toBeInTheDocument();
    });

    it('should disable time slots in case of intersections', async () => {
        render(
            <Provider store={store}>
                <ReservationsTable />
            </Provider>
        );

        const timeSlots_1 = await screen.findAllByText('08:00 - 09:30');
        expect(timeSlots_1.length).toBe(12);
        expect(timeSlots_1[0].classList.contains('selected')).not.toBeTruthy();
        fireEvent.click(timeSlots_1[0]);
        await waitFor(() => {
            expect(timeSlots_1[0].classList.contains('selected')).toBeTruthy();
        });

        const timeSlots_2 = await screen.findAllByText('08:30 - 10:00');
        expect(timeSlots_2.length).toBe(12);
        expect(timeSlots_2[0].classList.contains('selected')).not.toBeTruthy();

        const groupsHeaders = screen.getAllByText('Mon, 9 Jul');
        expect(groupsHeaders.length).toBe(3);
    });
});
