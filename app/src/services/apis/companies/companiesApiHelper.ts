import { Company, CompanyData } from "models/company";
import { TimeSlot } from "models/company";
import { convertTimeSlotFormat } from "helpers/date-helper";
import { ErrorCustom, ErrorType } from "models/error";

const filterCompaniesByType = (data: CompanyData[]): CompanyData[] => {
    const filteredData = data.filter(c => c.type === 'company');
    if(!filteredData.length) {
        throw new Error('There is no companies yet.');
    }
    return filteredData;
}

const convertCompaniesTimeSlots = (data: CompanyData[]): Company[] => {
    return data.map((companyData: CompanyData): Company => ({
        ...companyData,
        time_slots: companyData.time_slots.map(convertTimeSlotFormat)
    }))
}

const sortTimeSlots = (data: Company[]): Company[] => {
    return data.map((company: Company) => {
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