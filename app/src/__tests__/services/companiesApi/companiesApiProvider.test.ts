import { Company } from "models/company";
import { ErrorCustom, ErrorType } from "models/error";
import { CompaniesApiProvider } from "services/apis/companies/companiesApiProvider";

describe('Companies API provider', () => {
    it('fetchCompaniesData: should return data of the companies', async () => {
        const result: Company[] | ErrorCustom = await CompaniesApiProvider.fetchCompaniesData();
        if('message' in result) {
            expect(result.type).toBe(ErrorType.API_ERROR);
        } else {
            expect(result.length).toBe(3);
        }
    })
});