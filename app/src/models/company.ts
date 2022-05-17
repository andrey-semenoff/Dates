type CompanyData<TimeSlotType extends string|number> = {
    id: number;
    name: string;
    type: string;
    time_slots: TimeSlot<TimeSlotType>[];
}

type Company = {
    id: number;
    name: string;
    type: string;
    time_slots: TimeSlot<number>[];
}

type TimeSlot<T extends string|number> = {
    id: number;
    start_time: T;
    end_time: T;
}

type TypeSlotSelected = {
    id: number;
    start_time: number;
    end_time: number;
    company_id: number;
}

export type {
    CompanyData,
    Company,
    TimeSlot,
    TypeSlotSelected
}