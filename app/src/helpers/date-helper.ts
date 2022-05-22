import { TimeSlot } from 'models/company';

const convertTimeSlotFormat = (ts: Omit<TimeSlot<string>, 'id'>, id: number): TimeSlot<number> => {
    return {
        start_time: new Date(ts.start_time).getTime(),
        end_time: new Date(ts.end_time).getTime(),
        id
    };
};

const formatTimestamp = (ts: number): string => {
    const date: Date = new Date(ts);
    let hours: number | string = date.getHours();
    let minutes: number | string = date.getMinutes();
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return `${hours}:${minutes}`;
};

export { convertTimeSlotFormat, formatTimestamp };
