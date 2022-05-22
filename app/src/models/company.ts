type CompanyData = {
    id: number;
    name: string;
    type: string;
    time_slots: Omit<TimeSlot<string>, 'id'>[];
};

type Company = {
    id: number;
    name: string;
    type: string;
    time_slots: TimeSlot<number>[];
};

type TimeSlot<T extends string | number> = {
    id: number;
    start_time: T;
    end_time: T;
};

type TypeSlotSelected = TimeSlot<number> & {
    company_id: number;
};

export type { CompanyData, Company, TimeSlot, TypeSlotSelected };
