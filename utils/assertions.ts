
import { expect } from '@playwright/test';

export function expectSuccessStatus(status: number): void {
    expect(status).toBe(200);
}

export function expectObject(value: unknown): void {
    expect(value).not.toBeNull();
    expect(typeof value).toBe('object');
    expect(Array.isArray(value)).toBe(false);
}

export function expectRequiredFields(
    actual: Record<string, unknown>,
    fields: string[],
): void {
    for (const field of fields) {
        expect(actual).toHaveProperty(field);
    }
}