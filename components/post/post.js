const posts = [
    {
        id: 1,
        image: 'https://image.freepik.com/free-vector/barber-vintage-typeface-poster-with-sample-label-design-grey_1284-49198.jpg',
        job: 'Customer Success Manager (Americas)',
        nameCompany: 'Hotjar',
        locationJob: 'Remote(Americas)',
        insideDate: Date.now(),
        salary: 'USD 70,000 - 94,400',
        jobDescription: 'Please do not apply for this role if you are not physically located in the Americas (UTC-6 to UTC-5 / EST or CST specifically). While this is a remote position, we can not consider candidates that are not based in these regions. You can find a detailed explanation in our Recruitment FAQs. At Hotjar, we’re building Behavior Analytics software for businesses selling online. We make it easy for them to go beyond traditional web analytics and understand what users are really doing on their site. Reporting to the Customer Success Lead, we are looking for a Customer Success Manager to help us grow our Customer Success Team at Hotjar',
        aboutCompany: 'Applying for jobs by Hire with Near is the easiest way to land your next remote job!. When several companies send us the same job, we let candidates submit one application for all of the jobs listed. Youll receive an interview invite for any company interested.'
    },
    {
        id: 2,
        image: 'https://image.freepik.com/free-vector/barber-vintage-typeface-poster-with-sample-label-design-grey_1284-49198.jpg',
        job: 'Senior Software Engineer: Platformr',
        nameCompany: 'Peel Insights',
        locationJob: 'Remote',
        insideDate: Date.now(),
        salary: 'USD 18,000 - 28,700',
        jobDescription: 'Please do not apply for this role if you are not physically located in the Americas (UTC-6 to UTC-5 / EST or CST specifically). While this is a remote position, we can not consider candidates that are not based in these regions. You can find a detailed explanation in our Recruitment FAQs. At Hotjar, we’re building Behavior Analytics software for businesses selling online. We make it easy for them to go beyond traditional web analytics and understand what users are really doing on their site. Reporting to the Customer Success Lead, we are looking for a Customer Success Manager to help us grow our Customer Success Team at Hotjar',
        aboutCompany: 'Applying for jobs by Hire with Near is the easiest way to land your next remote job!. When several companies send us the same job, we let candidates submit one application for all of the jobs listed. Youll receive an interview invite for any company interested.'
    },
    {
        id: 3,
        image: 'https://image.freepik.com/free-vector/barber-vintage-typeface-poster-with-sample-label-design-grey_1284-49198.jpg',
        job: 'Senior Product Designer',
        nameCompany: 'Prismfly',
        locationJob: 'Remote',
        insideDate: Date.now(),
        salary: 'USD 24,000 - 36,400',
        jobDescription: 'Please do not apply for this role if you are not physically located in the Americas (UTC-6 to UTC-5 / EST or CST specifically). While this is a remote position, we can not consider candidates that are not based in these regions. You can find a detailed explanation in our Recruitment FAQs. At Hotjar, we’re building Behavior Analytics software for businesses selling online. We make it easy for them to go beyond traditional web analytics and understand what users are really doing on their site. Reporting to the Customer Success Lead, we are looking for a Customer Success Manager to help us grow our Customer Success Team at Hotjar',
        aboutCompany: 'Applying for jobs by Hire with Near is the easiest way to land your next remote job!. When several companies send us the same job, we let candidates submit one application for all of the jobs listed. Youll receive an interview invite for any company interested.'
    },
    {
        id: 4,
        image: 'https://image.freepik.com/free-vector/barber-vintage-typeface-poster-with-sample-label-design-grey_1284-49198.jpg',
        job: 'Apply to all Full Stack Engineer roles"!',
        nameCompany: 'Metabase',
        locationJob: 'Remote(Anywhere)',
        insideDate: Date.now(),
        salary: 'USD 24,000 - 36,400',
        jobDescription: 'Please do not apply for this role if you are not physically located in the Americas (UTC-6 to UTC-5 / EST or CST specifically). While this is a remote position, we can not consider candidates that are not based in these regions. You can find a detailed explanation in our Recruitment FAQs. At Hotjar, we’re building Behavior Analytics software for businesses selling online. We make it easy for them to go beyond traditional web analytics and understand what users are really doing on their site. Reporting to the Customer Success Lead, we are looking for a Customer Success Manager to help us grow our Customer Success Team at Hotjar',
        aboutCompany: 'Applying for jobs by Hire with Near is the easiest way to land your next remote job!. When several companies send us the same job, we let candidates submit one application for all of the jobs listed. Youll receive an interview invite for any company interested.'
    },
    {
        id: 5,
        image: 'https://image.freepik.com/free-vector/barber-vintage-typeface-poster-with-sample-label-design-grey_1284-49198.jpg',
        job: 'Technical Product Manager',
        nameCompany: 'Hire with Near',
        locationJob: 'Remote',
        insideDate: Date.now(),
        salary: 'USD 24,500 - 36,000',
        jobDescription: 'Please do not apply for this role if you are not physically located in the Americas (UTC-6 to UTC-5 / EST or CST specifically). While this is a remote position, we can not consider candidates that are not based in these regions. You can find a detailed explanation in our Recruitment FAQs. At Hotjar, we’re building Behavior Analytics software for businesses selling online. We make it easy for them to go beyond traditional web analytics and understand what users are really doing on their site. Reporting to the Customer Success Lead, we are looking for a Customer Success Manager to help us grow our Customer Success Team at Hotjar',
        aboutCompany: 'Applying for jobs by Hire with Near is the easiest way to land your next remote job!. When several companies send us the same job, we let candidates submit one application for all of the jobs listed. Youll receive an interview invite for any company interested.'
    },
    {
        id: 6,
        image: 'https://image.freepik.com/free-vector/barber-vintage-typeface-poster-with-sample-label-design-grey_1284-49198.jpg',
        job: 'Senior Full Stack Developer',
        nameCompany: 'Bonfire',
        locationJob: 'Remote',
        insideDate: Date.now(),
        salary: 'USD 24,000 - 36,400',
        jobDescription: 'Please do not apply for this role if you are not physically located in the Americas (UTC-6 to UTC-5 / EST or CST specifically). While this is a remote position, we can not consider candidates that are not based in these regions. You can find a detailed explanation in our Recruitment FAQs. At Hotjar, we’re building Behavior Analytics software for businesses selling online. We make it easy for them to go beyond traditional web analytics and understand what users are really doing on their site. Reporting to the Customer Success Lead, we are looking for a Customer Success Manager to help us grow our Customer Success Team at Hotjar',
        aboutCompany: 'Applying for jobs by Hire with Near is the easiest way to land your next remote job!. When several companies send us the same job, we let candidates submit one application for all of the jobs listed. Youll receive an interview invite for any company interested.'
    },
    {
        id: 7,
        image: 'https://image.freepik.com/free-vector/barber-vintage-typeface-poster-with-sample-label-design-grey_1284-49198.jpg',
        job: 'Javascript/Typescript Engineer with React Experience',
        nameCompany: 'Mirigos',
        locationJob: 'Remote',
        insideDate: Date.now(),
        salary: 'USD 24,000 - 36,400',
        jobDescription: 'Please do not apply for this role if you are not physically located in the Americas (UTC-6 to UTC-5 / EST or CST specifically). While this is a remote position, we can not consider candidates that are not based in these regions. You can find a detailed explanation in our Recruitment FAQs. At Hotjar, we’re building Behavior Analytics software for businesses selling online. We make it easy for them to go beyond traditional web analytics and understand what users are really doing on their site. Reporting to the Customer Success Lead, we are looking for a Customer Success Manager to help us grow our Customer Success Team at Hotjar',
        aboutCompany: 'Applying for jobs by Hire with Near is the easiest way to land your next remote job!. When several companies send us the same job, we let candidates submit one application for all of the jobs listed. Youll receive an interview invite for any company interested.'
    },
    {
        id: 8,
        image: 'https://image.freepik.com/free-vector/barber-vintage-typeface-poster-with-sample-label-design-grey_1284-49198.jpg',
        job: 'Senior Software Engineer',
        nameCompany: 'Capbase',
        locationJob: 'Remote',
        insideDate: Date.now(),
        salary: 'USD 34,000 - 39,800',
        jobDescription: 'Please do not apply for this role if you are not physically located in the Americas (UTC-6 to UTC-5 / EST or CST specifically). While this is a remote position, we can not consider candidates that are not based in these regions. You can find a detailed explanation in our Recruitment FAQs. At Hotjar, we’re building Behavior Analytics software for businesses selling online. We make it easy for them to go beyond traditional web analytics and understand what users are really doing on their site. Reporting to the Customer Success Lead, we are looking for a Customer Success Manager to help us grow our Customer Success Team at Hotjar',
        aboutCompany: 'Applying for jobs by Hire with Near is the easiest way to land your next remote job!. When several companies send us the same job, we let candidates submit one application for all of the jobs listed. Youll receive an interview invite for any company interested.'
    },
    {
        id: 9,
        image: 'https://image.freepik.com/free-vector/barber-vintage-typeface-poster-with-sample-label-design-grey_1284-49198.jpg',
        job: 'iOS Tech Lead',
        nameCompany: 'LeadChat(Mexico, Costa Rica, Bolivia)',
        locationJob: 'Remote',
        insideDate: Date.now(),
        salary: 'USD 24,000 - 36,400',
        jobDescription: 'Please do not apply for this role if you are not physically located in the Americas (UTC-6 to UTC-5 / EST or CST specifically). While this is a remote position, we can not consider candidates that are not based in these regions. You can find a detailed explanation in our Recruitment FAQs. At Hotjar, we’re building Behavior Analytics software for businesses selling online. We make it easy for them to go beyond traditional web analytics and understand what users are really doing on their site. Reporting to the Customer Success Lead, we are looking for a Customer Success Manager to help us grow our Customer Success Team at Hotjar',
        aboutCompany: 'Applying for jobs by Hire with Near is the easiest way to land your next remote job!. When several companies send us the same job, we let candidates submit one application for all of the jobs listed. Youll receive an interview invite for any company interested.'
    },
    {
        id: 10,
        image: 'https://image.freepik.com/free-vector/barber-vintage-typeface-poster-with-sample-label-design-grey_1284-49198.jpg',
        job: 'Account Manager',
        nameCompany: 'Trialfacts',
        locationJob: 'Remote',
        insideDate: Date.now(),
        salary: 'USD 14,000 - 26,000',
        jobDescription: 'Please do not apply for this role if you are not physically located in the Americas (UTC-6 to UTC-5 / EST or CST specifically). While this is a remote position, we can not consider candidates that are not based in these regions. You can find a detailed explanation in our Recruitment FAQs. At Hotjar, we’re building Behavior Analytics software for businesses selling online. We make it easy for them to go beyond traditional web analytics and understand what users are really doing on their site. Reporting to the Customer Success Lead, we are looking for a Customer Success Manager to help us grow our Customer Success Team at Hotjar',
        aboutCompany: 'Applying for jobs by Hire with Near is the easiest way to land your next remote job!. When several companies send us the same job, we let candidates submit one application for all of the jobs listed. Youll receive an interview invite for any company interested.'
    },
];

export default posts;