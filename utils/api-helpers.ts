
import {
    APIRequestContext,
    APIResponse,
} from '@playwright/test';

export async function getJson(
    request: APIRequestContext,
    endpoint: string,
): Promise<APIResponse> {
    return request.get(endpoint, {
        headers: {
            Accept: 'application/json',
        },
    });
}

export async function postForm(
    request: APIRequestContext,
    endpoint: string,
    data: Record<string, string>,
): Promise<APIResponse> {
    return request.post(endpoint, {
        form: data,
        headers: {
            Accept: 'application/json',
        },
    });
}