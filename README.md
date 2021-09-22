# Circulo VA Status Checker
Welcome to a quick status checker homework assignment! It utilizes the VA's Lighthouse API to confirm a patient's VA status.

1. Clone repo
2. yarn install
3. yarn start

The API key is for the VA's sandbox env so it only accepts the following test patients:
```
const testdata = [
  {
    email: 'va.api.user+idme.001@gmail.com',
    first_name: 'Tamara',
    middle_name: 'E',
    last_name: 'Ellis',
    gender: 'F',
    birth_date: '1967-06-19',
    ssn: '796130115',
    veteran_confirmation_status: 'confirmed',
    disability_rating: '40'
  },
  {
    email: 'va.api.user+idme.002@gmail.com',
    first_name: 'Janet',
    middle_name: 'L',
    last_name: 'Moore',
    gender: 'F',
    birth_date: '1949-05-06',
    ssn: '796127677',
    veteran_confirmation_status: 'confirmed',
    disability_rating: '50'
  },
  {
    email: 'va.api.user+idme.003@gmail.com',
    first_name: 'Ralph',
    middle_name: 'E',
    last_name: 'Lee',
    gender: 'M',
    birth_date: '1948-10-30',
    ssn: '796378782',
    veteran_confirmation_status: 'confirmed',
    disability_rating: '60'
  },
  {
    email: 'va.api.user+idme.005@gmail.com',
    first_name: 'Pauline',
    middle_name: 'E',
    last_name: 'Foster',
    gender: 'F',
    birth_date: '1976-06-09',
    ssn: '796330625',
    veteran_confirmation_status: 'confirmed',
    disability_rating: '60'
  },
  {
    email: 'va.api.user+idme.006@gmail.com',
    first_name: 'Russell',
    middle_name: 'James',
    last_name: 'Freeman',
    gender: 'M',
    birth_date: '1969-11-05',
    ssn: '796149080',
    veteran_confirmation_status: 'confirmed',
    disability_rating: '30'
  },
  {
    email: 'va.api.user+idme.008@gmail.com',
    first_name: 'Greg',
    middle_name: 'A',
    last_name: 'Anderson',
    gender: 'M',
    birth_date: '1933-04-05',
    ssn: '796121200',
    veteran_confirmation_status: 'not confirmed',
    disability_rating: '50'
  },
  {
    email: 'va.api.user+idme.012@gmail.com',
    first_name: 'Andrea',
    middle_name: 'L',
    last_name: 'Mitchell',
    gender: 'F',
    birth_date: '1959-12-01',
    ssn: '796127781',
    veteran_confirmation_status: 'confirmed',
    disability_rating: '30'
  },
  {
    email: 'va.api.user+idme.013@gmail.com',
    first_name: 'Kenneth',
    middle_name: 'William',
    last_name: 'Andrews',
    gender: 'M',
    birth_date: '1990-02-20',
    ssn: '796295980',
    veteran_confirmation_status: 'confirmed',
    disability_rating: '40'
  },
  {
    email: 'va.api.user+idme.025@gmail.com',
    first_name: 'Wesley',
    middle_name: 'Watson',
    last_name: 'Ford',
    gender: 'M',
    birth_date: '1986-05-06',
    ssn: '796043735',
    veteran_confirmation_status: 'confirmed',
    disability_rating: '100'
  },
  {
    email: 'va.api.user+idme.026@gmail.com',
    first_name: 'Melvin',
    middle_name: 'V',
    last_name: 'Freeman',
    gender: 'M',
    birth_date: '1971-11-19',
    ssn: '796184750',
    veteran_confirmation_status: 'confirmed',
    disability_rating: '100'
  },
  {
    email: 'va.api.user+idme.027@gmail.com',
    first_name: 'Herbert',
    middle_name: 'Michael',
    last_name: 'Gardner',
    gender: 'M',
    birth_date: '1983-02-21',
    ssn: '796122369',
    veteran_confirmation_status: 'confirmed',
    disability_rating: '40'
  },
  {
    email: 'va.api.user+idme.029@gmail.com',
    first_name: 'Jesse',
    middle_name: 'J',
    last_name: 'George',
    gender: 'M',
    birth_date: '1950-01-31',
    ssn: '796330163',
    veteran_confirmation_status: 'confirmed',
    disability_rating: '30'
  },
  {
    email: 'va.api.user+idme.030@gmail.com',
    first_name: 'Sidney',
    middle_name: 'A',
    last_name: 'Gibson',
    gender: 'M',
    birth_date: '1933-08-04',
    ssn: '796127094',
    veteran_confirmation_status: 'confirmed',
    disability_rating: null
  },
  {
    email: 'va.api.user+idme.032@gmail.com',
    first_name: 'Jeffery',
    middle_name: 'J',
    last_name: 'Hayes',
    gender: 'M',
    birth_date: '1937-09-25',
    ssn: '796131729',
    veteran_confirmation_status: 'confirmed',
    disability_rating: '30'
  },
  {
    email: 'va.api.user+idme.033@gmail.com',
    first_name: 'Everett',
    middle_name: 'Avery',
    last_name: 'Horton',
    gender: 'M',
    birth_date: '1982-04-23',
    ssn: '796377148',
    veteran_confirmation_status: 'confirmed',
    disability_rating: null
  },
  {
    email: 'va.api.user+idme.034@gmail.com',
    first_name: 'Mathew',
    middle_name: 'A',
    last_name: 'Howell',
    gender: 'M',
    birth_date: '1927-01-18',
    ssn: '796131275',
    veteran_confirmation_status: 'confirmed',
    disability_rating: null
  },
  {
    email: 'va.api.user+idme.035@gmail.com',
    first_name: 'Julio',
    middle_name: 'E',
    last_name: 'Hunter',
    gender: 'M',
    birth_date: '1951-11-18',
    ssn: '796378321',
    veteran_confirmation_status: 'confirmed',
    disability_rating: '30'
  },
  {
    email: 'va.api.user+idme.037@gmail.com',
    first_name: 'Daryl',
    middle_name: 'F',
    last_name: 'Lawrence',
    gender: 'M',
    birth_date: '1953-02-15',
    ssn: '796153447',
    veteran_confirmation_status: 'confirmed',
    disability_rating: '40'
  },
  {
    email: 'va.api.user+idme.041@gmail.com',
    first_name: 'Christian',
    middle_name: 'Fitzgerald',
    last_name: 'Patterson',
    gender: 'M',
    birth_date: '1964-03-04',
    ssn: '796218467',
    veteran_confirmation_status: 'confirmed',
    disability_rating: '10'
  },
  {
    email: 'va.api.user+idme.042@gmail.com',
    first_name: 'Jessie',
    middle_name: 'F',
    last_name: 'Price',
    gender: 'M',
    birth_date: '1934-04-07',
    ssn: '796126978',
    veteran_confirmation_status: 'confirmed',
    disability_rating: '10'
  },
  {
    email: 'va.api.user+idme.046@gmail.com',
    first_name: 'Mattie',
    middle_name: 'May',
    last_name: 'Reid',
    gender: 'F',
    birth_date: '1964-04-14',
    ssn: '796109651',
    veteran_confirmation_status: 'confirmed',
    disability_rating: null
  }
]
```
