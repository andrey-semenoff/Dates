import styles from './time-slot-group.module.css';
import TimeSlotElement from "components/time-slot/time-slot";
import { TimeSlot } from "models/company";
import { useAppDispatch, useAppSelector } from 'helpers/hooks';
import { addTimeSlot, replaceTimeSlot, removeTimeSlot } from 'store/features/timeSlots';
import { Month, WeekDay } from 'models/enums';

type Props = {
    company_id: number,
    time_slots: TimeSlot<number>[];
}

function TimeSlotGroup({time_slots, company_id}: Props) {
    const selectedTimeSlots = useAppSelector(state => state.timeSlots.selectedSlots);
    const dispatch = useAppDispatch();
    const dayNum: number = new Date(time_slots[0].start_time).getDay();
    const dayOfTheMonth: number = new Date(time_slots[0].start_time).getDate();
    const monthNum: number = new Date(time_slots[0].start_time).getMonth();

    const isTimeSlotSelected = (ts_id: number): boolean => {
        return !!selectedTimeSlots.find(item => (item.id === ts_id && item.company_id === company_id));
    }

    const isAnotherTimeSlotSelected = (): boolean => {
        return !!selectedTimeSlots.find(item => item.company_id === company_id);
    }

    const isTimeSlotDisabled = (ts: TimeSlot<number>): boolean => {
        let isDisabled = false;
        
        for(let selectedTimeSlot of selectedTimeSlots) {
            if((selectedTimeSlot.start_time >= ts.start_time && selectedTimeSlot.start_time < ts.end_time) ||
                (selectedTimeSlot.end_time > ts.start_time && selectedTimeSlot.end_time <= ts.end_time)) {
                isDisabled = true;
                break;
            }
        }

        return isDisabled;
    }

    const onTimeSlotClick = (ts: TimeSlot<number>) => {
        const payload = {
            id: ts.id,
            start_time: ts.start_time,
            end_time: ts.end_time,
            company_id,
        };
        if(isTimeSlotSelected(ts.id)) {
            dispatch(removeTimeSlot(payload));
        } else if (isAnotherTimeSlotSelected()) {
            dispatch(replaceTimeSlot(payload));
        } else {
            dispatch(addTimeSlot(payload));
        }
    }

    const timeSlots = time_slots.map(
        (ts: TimeSlot<number>) => {
            let timeSlotState = null;
            if (isTimeSlotSelected(ts.id)) {
                timeSlotState = 'selected';
            } else if (isTimeSlotDisabled(ts)) {
                timeSlotState = 'disabled';
            }
            
            return <TimeSlotElement 
                {...ts} 
                state={timeSlotState}
                onClick={() => onTimeSlotClick(ts)} 
                key={ts.id}
            />
        }
    )

    return (
        <div className={styles.wrapper}>
            <div className={styles.day}>
                {WeekDay[dayNum]}, {dayOfTheMonth} {Month[monthNum]}
            </div>
            <div className={styles.timeSlots}>
                {timeSlots}
            </div>
        </div>
    )
}

export default TimeSlotGroup;