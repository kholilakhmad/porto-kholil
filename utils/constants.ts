
export const BASE_URL =
    process.env.BASE_URL ?? 'https://automationexercise.com'; //jika process.env.BASE_URL tidak ada, maka akan menggunakan BASE_URL = 'https://automationexercise.com'

export const API_URL =
    process.env.API_URL ?? BASE_URL; //jika process.env.API_URL tidak ada, ma ka akan menggunakan API_URL = BASE_URL

export const API_ENDPOINTS = {
    products: '/api/productsList', //
    brands: '/api/brandsList', //
    searchProducts: '/api/searchProduct', //
    verifyLogin: '/api/verifyLogin', //
    createAccount: '/api/createAccount', //
    deleteAccount: '/api/deleteAccount', //
    getUserDetail: '/api/getUserDetailByEmail',
} as const;

export const TEST_TIMEOUT = {
    default: 30_000,
    assertion: 5_000,
} as const;