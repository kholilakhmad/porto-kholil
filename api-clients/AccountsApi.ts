
import { APIRequestContext, APIResponse } from '@playwright/test';

export class AccountsApi {
    constructor(private request: APIRequestContext) { } //constructor akan mengembalikan instance dari class AccountsApi 
    // @ts-ignore
    async createAccount(
        account: Record<string, string>,
    ): Promise<APIResponse> {
        return this.request.post('/api/createAccount', { //createAccount adalah method yang akan mengembalikan instance dari class AccountsApi
            form: account, //account adalah parameter yang akan digunakan untuk membuat akun
        });
    }
    // @ts-ignore
    async updateAccount(
        account: Record<string, string>,
    ): Promise<APIResponse> {
        return this.request.put('/api/updateAccount', {
            form: account, //account adalah parameter yang akan digunakan untuk mengupdate akun
        });
    }

    async deleteAccount(
        email: string,
        password: string,
    ): Promise<APIResponse> {
        return this.request.delete('/api/deleteAccount', { //deleteAccount adalah method yang akan mengembalikan instance dari class AccountsApi
            form: {
                email,
                password,
            }, //email dan password adalah parameter yang akan digunakan untuk menghapus akun
        });
    }
}