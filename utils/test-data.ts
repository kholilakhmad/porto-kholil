
export function generateUniqueEmail(): string {
    const uniqueId =
        `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    return `qa-${uniqueId}@example.com`;
}

export function generateUser() {
    return {
        name: 'QA Automation User',
        email: generateUniqueEmail(),
        password: 'TestPass123!',
        title: 'Mr',
        birth_date: '15',
        birth_month: '5',
        birth_year: '1995',
        firstname: 'QA',
        lastname: 'Automation',
        company: 'QA Portfolio',
        address1: 'Jl. Testing No. 10',
        country: 'India',
        zipcode: '12345',
        state: 'Test State',
        city: 'Test City',
        mobile_number: '081234567890',
    };
}