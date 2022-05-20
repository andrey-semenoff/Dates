import styles from './company-time-slots.module.css';
import { Company, TimeSlot } from 'models/company';
import TimeSlotGroup from 'components/time-slot-group/time-slot-group';
import ReservationInfo from 'components/reservation-info/reservation-info';
import { useAppSelector } from 'helpers/hooks';

function CompanyTimeSlots({id, name, time_slots}: Company) {
    const selectedTimeSlots = useAppSelector(state => state.timeSlots.selectedSlots);
    const createTimeSlotGroup = (timeSlotGroupSet: TimeSlot<number>[], index: number): JSX.Element => {
        return <TimeSlotGroup 
            time_slots={timeSlotGroupSet}
            company_id={id}
            key={index} 
        />;
    }

    const createTimeSlotGroups = () => {
        let prevDay: number|null = null;
        let timeSlotGroupSet: TimeSlot<number>[] = [];
        let timeSlotGroups: JSX.Element[] = [];
        let index: number = 0;
        time_slots.forEach((ts: TimeSlot<number>, idx: number) => {
            const currDay = new Date(ts.start_time).getDay();
            index = ts.id;
            if(prevDay === null || currDay === prevDay) {
                timeSlotGroupSet.push(ts);
            } else {
                timeSlotGroups.push(createTimeSlotGroup(timeSlotGroupSet, index));
                timeSlotGroupSet = [ts];
            }
            prevDay = currDay;
        });
        timeSlotGroups.push(createTimeSlotGroup(timeSlotGroupSet, index + 1));
        return timeSlotGroups;
    }

    const getSelectedTimeSlot = (): TimeSlot<number> | undefined => {
        const selectedTimeSlot = selectedTimeSlots.find(ts => ts.company_id === id);
        return time_slots.find((ts: TimeSlot<number>) => ts.id === selectedTimeSlot?.id);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>{name}</div>
            <ReservationInfo timeSlot={getSelectedTimeSlot()} />
            <div className={styles.timeSlotGroups}>
                {createTimeSlotGroups()}
            </div>
        </div>
    );
}

export default CompanyTimeSlots;