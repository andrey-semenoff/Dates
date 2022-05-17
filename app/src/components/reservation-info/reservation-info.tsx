import { formatTimestamp } from 'helpers/date-helper';
import { TimeSlot } from 'models/company';
import { Month, WeekDay } from 'models/enums';
import styles from './reservation-info.module.css';

type Props = {
    timeSlot: TimeSlot<number> | undefined
}

function ReservationInfo({timeSlot}: Props) {
    const getReservationDate = () => {
        if(!timeSlot) {
            return null;
        }
        const dayNum: number = new Date(timeSlot.start_time).getDay();
        const dayOfTheMonth: number = new Date(timeSlot.start_time).getDate();
        const monthNum: number = new Date(timeSlot.start_time).getMonth();
        return `${WeekDay[dayNum]}, ${dayOfTheMonth} ${Month[monthNum]} ${formatTimestamp(timeSlot.start_time)} - ${formatTimestamp(timeSlot.end_time)}`;
    }

    return (
        <div className={styles.reservationInfo}>
            {
                timeSlot
                ? 
                    <div className={styles.timeSlot}>
                        <div className={styles.timeSlotHeading}>Reservation</div>
                        {getReservationDate()}
                    </div>
                : 
                    'No reservation'
                    
            }
        </div>
    );
}

export default ReservationInfo;