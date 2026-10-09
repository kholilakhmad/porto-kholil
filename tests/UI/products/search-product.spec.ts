
import { test, expect } from '@playwright/test';
import productData from '../../../data/products.json';

test.describe('Product Search', () => {
    for (const searchCase of productData.searchCases) {
        test(`${searchCase.id} - search "${searchCase.keyword}"`, async ({
            page,
        }) => {
            await page.goto('/products');

            await page.getByRole('textbox', {
                name: /search product/i,
            }).fill(searchCase.keyword);

            await page.getByRole('button', {
                name: /search/i,
            }).click();

            const results = page.locator('.features_items .product-image-wrapper');

            if (searchCase.expectedResults) {
                await expect(results.first()).toBeVisible();
            } else {
                await expect(results).toHaveCount(0);
            }
        });
    }
});