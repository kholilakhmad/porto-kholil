
import { APIRequestContext, APIResponse } from '@playwright/test';

export class BrandsApi {
    constructor(private request: APIRequestContext) { } //constructor akan mengembalikan instance dari class BrandsApi 
    // @ts-ignore
    async getBrands(): Promise<APIResponse> {
        return this.request.get('/api/brandsList');//getBrand adalah method yang akan mengembalikan instance dari class BrandsApi
    }
}