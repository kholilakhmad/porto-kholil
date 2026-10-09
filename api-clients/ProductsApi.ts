
import { APIRequestContext, APIResponse } from '@playwright/test';

export class ProductsApi {
  constructor(private request: APIRequestContext) { } //constructor akan mengembalikan instance dari class ProductsApi

  async getProducts(): Promise<APIResponse> {
    return this.request.get('/api/productsList'); //getProducts adalah method yang akan mengembalikan instance dari class ProductsApi
  }
  async searchProducts(
    searchProduct: string,
  ): Promise<APIResponse> {
    return this.request.post('/api/searchProduct', { //searchProducts adalah method yang akan mengembalikan instance dari class ProductsApi
      form: {
        search_product: searchProduct, //search_product adalah parameter yang akan digunakan untuk mencari produk
      },
    });
  }
}