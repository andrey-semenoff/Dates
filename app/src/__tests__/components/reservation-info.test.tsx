import { render, screen } from '@testing-library/react';
import ReservationInfo from 'components/reservation-info/reservation-info';
import { company } from '__tests__/mock_data/data';

describe('Reservation info', () => {
    it('should render reservation info: no reservation', async () => {
        render(<ReservationInfo timeSlot={undefined} />);
        expect(screen.getByText('No reservation')).toBeInTheDocument();
    });

    it('should render reservation info: with reservation', async () => {
        render(<ReservationInfo timeSlot={company.time_slots[0]} />);
        expect(screen.getByText('Reservation')).toBeInTheDocument();
        expect(screen.getByText('Mon, 9 Jul 08:00 - 09:30')).toBeInTheDocument();
    });
});
