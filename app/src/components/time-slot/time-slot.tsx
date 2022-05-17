import styles from './time-slot.module.css';
import classnames from 'classnames';
import { formatTimestamp } from 'helpers/date-helper';

type Props = {
    start_time: number; 
    end_time: number;
    state: string | null;
    onClick: () => void;
}

function TimeSlotElement({start_time, end_time, state = null, onClick}: Props) {
    const classes = classnames(
        styles.timeSlot,
        {
            [state ? styles[state] : '']: state,
        })
    
        const onClickHandler = () => {
            if(state === 'disabled') {
                return;
            }
            onClick();
        }

    return (
        <div className={classes} onClick={onClickHandler}>
            {formatTimestamp(start_time)} - {formatTimestamp(end_time)}
        </div>
    );
}

export default TimeSlotElement;