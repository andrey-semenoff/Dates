import { convertTimeSlotFormat, formatTimestamp } from 'helpers/date-helper';
import { TimeSlot } from 'models/company';

it('should convert ISO time string into UNIX timestamp', () => {
    const id = 1;
    const timeSlotString = {
        start_time: '2018-07-09T08:00:00.000+02:00',
        end_time: '2018-07-09T09:30:00.000+02:00'
    };
    const result: TimeSlot<number> = convertTimeSlotFormat(timeSlotString, id);
    expect(result).toEqual({
        start_time: 1531116000000,
        end_time: 1531121400000,
        id
    });
});

it('should format timestamp into hours and minutes', () => {
    const result_1: string = formatTimestamp(1531116000000);
    expect(result_1).toBe('08:00');
    const result_2: string = formatTimestamp(1531121400000);
    expect(result_2).toBe('09:30');
    const result_3: string = formatTimestamp(1531132200000);
    expect(result_3).toBe('12:30');
});
