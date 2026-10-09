
import { APIRequestContext, APIResponse } from '@playwright/test';

export class AuthApi {
    constructor(private request: APIRequestContext) { } //constructor akan mengembalikan instance dari class AuthApi 
    // @ts-ignore
    async verifyLogin(
        email: string,
        password: string,
    ): Promise<APIResponse> {
        return this.request.post('/api/verifyLogin', { //verifyLogin adalah method yang akan mengembalikan instance dari class AuthApi
            form: {
                email,
                password,
            }, //email dan password adalah parameter yang akan digunakan untuk login
        }); 
    }
}