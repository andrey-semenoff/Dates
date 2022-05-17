import styles from './reservations-table.module.css';
import CompanyTimeSlots from 'components/company-time-slots/company-time-slots';
import { Company } from 'models/company';
import { useEffect, useState } from 'react';
import { CompaniesApiProvider } from 'services/apis/companies/companiesApiProvider';
import { ErrorCustom } from 'models/error';

function ReservationsTable() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorCustom>();
    const [companiesData, setCompaniesData] = useState<Company[] | null>();

    const getCompanies = async () => {
        setIsLoading(true);
        const result: Company[] | ErrorCustom = await CompaniesApiProvider.fetchCompaniesData();
        setIsLoading(false);
        
        if('message' in result) {
            setError(result);
        } else {
            setCompaniesData(result);
        }
    }

    useEffect(() => {
        getCompanies();
    }, []);

    const companiesList = companiesData?.map((company: Company): JSX.Element => {
        return (
            <CompanyTimeSlots {...company} key={company.id} />
        );
    }); 

    return (
        <div className="container">
            {
                isLoading
                ?
                    'Loading...'   
                :
                    error 
                    ? 
                        error.message 
                    :
                        companiesList 
                        && 
                            <div className={styles.list}>
                                {companiesList}
                            </div>
            }
        </div>
    );
}

export default ReservationsTable;