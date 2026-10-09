
import { test, expect } from '@playwright/test';
import { API_ENDPOINTS } from '../../../utils/constants';
import { getJson } from '../../../utils/api-helpers';

test.describe('Products API', () => {
    test('GET product list returns product data', async ({ request }) => {
        const response = await getJson(
            request,
            API_ENDPOINTS.products,
        );

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body).toHaveProperty('responseCode', 200);
        expect(Array.isArray(body.products)).toBe(true);

        if (body.products.length > 0) {
            expect(body.products[0]).toHaveProperty('id');
            expect(body.products[0]).toHaveProperty('name');
            expect(body.products[0]).toHaveProperty('price');
        }
    });
    test("search products", async({request}) => {
        const response = await getJson(
            request,
            API_ENDPOINTS.searchProducts,
        );
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body).toHaveProperty('responseCode', 200);
        expect(Array.isArray(body.products)).toBe(true);
        if (body.products.length > 0) {
            expect(body.products[0]).toHaveProperty('id');
            expect(body.products[0]).toHaveProperty('name');
            expect(body.products[0]).toHaveProperty('price');
        }
    })
});