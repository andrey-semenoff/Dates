import { CompanyData } from "models/company";
import { TimeSlot } from "models/company";
import { convertTimeSlotFormat } from "helpers/date-helper";
import { ErrorCustom, ErrorType } from "models/error";

const filterCompaniesByType = (data: CompanyData<string>[]) => {
    const filteredData = data.filter(c => c.type === 'company');
    if(!filteredData.length) {
        throw new Error('There is no companies yet.');
    }
    return filteredData;
}

const convertCompaniesTimeSlots = (data: CompanyData<string>[]): CompanyData<number>[] => {
    return data.map((companyData: CompanyData<string>): CompanyData<number> => ({
        ...companyData,
        time_slots: companyData.time_slots.map(convertTimeSlotFormat)
    }))
}

const sortTimeSlots = (data: CompanyData<number>[]): CompanyData<number>[] => {
    return data.map((company: CompanyData<number>) => {
        company.time_slots.sort((a: TimeSlot<number>, b: TimeSlot<number>) => {
            if(a.start_time > b.start_time) {
                return 1;
            } else if (a.start_time < b.start_time) {
                return -1;
            }
            return 0;
        })
        return company;
    });
}

const handleFetchCompaniesDataError = (err: Error): ErrorCustom => {
    console.error(err);
    return {
        type: ErrorType.API_ERROR,
        message: `API error: ${err.message}`
    };
}

export {
    filterCompaniesByType,
    sortTimeSlots,
    convertCompaniesTimeSlots,
    handleFetchCompaniesDataError,
}