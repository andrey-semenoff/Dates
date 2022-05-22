import { Company } from 'models/company';
import { ErrorCustom } from 'models/error';
import {
    convertCompaniesTimeSlots,
    filterCompaniesByType,
    handleFetchCompaniesDataError,
    sortTimeSlots
} from './companiesApiHelper';

const { REACT_APP_COMPANY_API_BASE_URL: COMPANY_API_BASE_URL } = process.env;

async function fetchCompaniesData(): Promise<Company[] | ErrorCustom> {
    return await window
        .fetch(`${COMPANY_API_BASE_URL}/companies`)
        .then((response) => response.json())
        .then(filterCompaniesByType)
        .then(convertCompaniesTimeSlots)
        .then(sortTimeSlots)
        .catch(handleFetchCompaniesDataError);
}

export const CompaniesApiProvider = {
    fetchCompaniesData
};
