/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiURL } from '@/constants/api.constant';
import { BaseService } from '../base.service';
import { IProduct } from './product.model';

export class ProductService extends BaseService {
  private static _instance: ProductService;

  public static getInstance(): ProductService {
    return this._instance || (this._instance = new this());
  }

  createProduct(data: any): Promise<IProduct> {
    const url = ApiURL.CREATE_PRODUCT;
    return this.postFormData(url, data);
  }

  getAllProducts({ page, limit, sort, filter }: any): Promise<IProduct> {
    const { name } = filter;
    const url = ApiURL.GET_PRODUCTS({ page, limit, sort, name });
    return this.get(url);
  }

  getProductById(id: string): Promise<IProduct> {
    const url = ApiURL.GET_PRODUCTS_BY_ID(id);
    return this.get(url);
  }

  updateProductById(id: string, data: any): Promise<IProduct> {
    const url = ApiURL.GET_PRODUCTS_BY_ID(id);
    return this.patch(url, data);
  }

  deleteProductById(id: string): Promise<IProduct> {
    const url = ApiURL.DELETE_PRODUCT(id);
    return this.delete(url);
  }
}
