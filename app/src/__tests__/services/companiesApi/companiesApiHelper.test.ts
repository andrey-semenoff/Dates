import { Company, CompanyData } from 'models/company';
import { ErrorCustom, ErrorType } from 'models/error';
import {
    convertCompaniesTimeSlots,
    filterCompaniesByType,
    handleFetchCompaniesDataError,
    sortTimeSlots
} from 'services/apis/companies/companiesApiHelper';
import { companiesData } from '__tests__/mock_data/data';

describe('Companies API helper', () => {
    it('filterCompaniesByType: should filter companies by type field', () => {
        expect(filterCompaniesByType(companiesData).length).toBe(2);
    });

    it('convertCompaniesTimeSlots: should convert companies time slots to format of number and adding "id" prop', () => {
        const filteredCompaniesData: CompanyData[] = filterCompaniesByType(companiesData);
        const companies: Company[] = convertCompaniesTimeSlots(filteredCompaniesData);
        expect(companies[0].time_slots[0].start_time).toBe(1531123200000);
        expect(companies[0].time_slots[0].end_time).toBe(1531125000000);
        expect(companies[0].time_slots[0].id).toBe(0);
        expect(companies[1].time_slots[2].end_time).toBe(1531125000000);
        expect(companies[1].time_slots[2].id).toBe(2);
    });

    it('sortTimeSlots: should sort companies time slots in desc order', () => {
        const filteredCompaniesData: CompanyData[] = filterCompaniesByType(companiesData);
        const companies: Company[] = convertCompaniesTimeSlots(filteredCompaniesData);
        const companiesWithSortedTimeSlots: Company[] = sortTimeSlots(companies);
        expect(companiesWithSortedTimeSlots[0].time_slots[0].start_time).toBe(1531116000000);
        expect(companiesWithSortedTimeSlots[0].time_slots[1].start_time).toBe(1531117800000);
        expect(companiesWithSortedTimeSlots[0].time_slots[2].start_time).toBe(1531121400000);
        expect(companiesWithSortedTimeSlots[0].time_slots[3].start_time).toBe(1531123200000);
        expect(companiesWithSortedTimeSlots[1].time_slots[0].start_time).toBe(1531117800000);
        expect(companiesWithSortedTimeSlots[1].time_slots[1].start_time).toBe(1531119600000);
        expect(companiesWithSortedTimeSlots[1].time_slots[2].start_time).toBe(1531131600000);
    });

    it('handleFetchCompaniesDataError: should return ErrorCustom object', () => {
        const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {
            jest.fn();
        });
        const errorMessage = 'Some error message';
        const error: Error = new Error(errorMessage);
        const errorCustom: ErrorCustom = handleFetchCompaniesDataError(error);
        expect(consoleError).toBeCalled();
        expect(errorCustom).toEqual({
            type: ErrorType.API_ERROR,
            message: `API error: ${errorMessage}`
        });
    });
});
