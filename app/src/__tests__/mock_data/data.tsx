import { Company, CompanyData } from 'models/company';

const company: Company = {
    id: 1,
    name: 'Company 10',
    type: 'company',
    time_slots: [
        {
            id: 1,
            start_time: 1531116000000,
            end_time: 1531121400000
        },
        {
            id: 2,
            start_time: 1531126000000,
            end_time: 1531131400000
        },
        {
            id: 3,
            start_time: 1531202400000,
            end_time: 1531206000000
        }
    ]
};

const timeSlotsData = [
    {
        start_time: 1531116000000,
        end_time: 1531121400000,
        state: null,
        onClick: () => 'click_1'
    },
    {
        start_time: 1531116000000,
        end_time: 1531121400000,
        state: 'selected',
        onClick: () => 'click_2'
    },
    {
        start_time: 1531116000000,
        end_time: 1531121400000,
        state: 'disabled',
        onClick: () => 'click_3'
    }
];

const companiesData: CompanyData[] = [
    {
        id: 1,
        name: 'Company 1',
        type: 'company',
        time_slots: [
            {
                start_time: '2018-07-09T10:00:00.000+02:00',
                end_time: '2018-07-09T10:30:00.000+02:00'
            },
            {
                start_time: '2018-07-09T08:00:00.000+02:00',
                end_time: '2018-07-09T09:30:00.000+02:00'
            },
            {
                start_time: '2018-07-09T09:30:00.000+02:00',
                end_time: '2018-07-09T11:00:00.000+02:00'
            },
            {
                start_time: '2018-07-09T08:30:00.000+02:00',
                end_time: '2018-07-09T10:00:00.000+02:00'
            }
        ]
    },
    {
        id: 2,
        name: 'Company 2',
        type: 'not-a-company',
        time_slots: [
            {
                start_time: '2018-07-09T08:00:00.000+02:00',
                end_time: '2018-07-09T09:30:00.000+02:00'
            },
            {
                start_time: '2018-07-09T08:30:00.000+02:00',
                end_time: '2018-07-09T10:00:00.000+02:00'
            },
            {
                start_time: '2018-07-09T09:00:00.000+02:00',
                end_time: '2018-07-09T10:30:00.000+02:00'
            }
        ]
    },
    {
        id: 3,
        name: 'Company 3',
        type: 'company',
        time_slots: [
            {
                start_time: '2018-07-09T08:30:00.000+02:00',
                end_time: '2018-07-09T10:00:00.000+02:00'
            },
            {
                start_time: '2018-07-09T12:20:00.000+02:00',
                end_time: '2018-07-09T13:30:00.000+02:00'
            },
            {
                start_time: '2018-07-09T09:00:00.000+02:00',
                end_time: '2018-07-09T10:30:00.000+02:00'
            }
        ]
    }
];

export { company, timeSlotsData, companiesData };
