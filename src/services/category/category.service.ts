/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiURL } from '@/constants/api.constant';
import { BaseService } from '../base.service';
import { ICategory } from './category.model';

export class CategoryService extends BaseService {
  private static _instance: CategoryService;

  public static getInstance(): CategoryService {
    return this._instance || (this._instance = new this());
  }

  createCategory(data: any): Promise<ICategory> {
    const url = ApiURL.CREATE_CATEGORY;
    return this.post(url, data);
  }

  getAllCategories({ page, limit, sort, filter }: any): Promise<ICategory> {
    const url = ApiURL.GET_CATEGORIES({ page, limit, sort, filter });
    return this.get(url);
  }

  getAllSubCategories(id: string): Promise<ICategory> {
    const url = ApiURL.GET_SUB_CATEGORY_BY_CATEGORY_ID(id);
    return this.get(url);
  }

  getCategoryById(id: string): Promise<ICategory> {
    const url = ApiURL.GET_CATEGORY_BY_ID(id);
    return this.get(url);
  }

  updateCategoryById(id: string, data: any): Promise<ICategory> {
    const url = ApiURL.GET_CATEGORY_BY_ID(id);
    return this.patch(url, data);
  }

  deleteCategoryById(id: string): Promise<ICategory> {
    const url = ApiURL.DELETE_CATEGORY(id);
    return this.delete(url);
  }
}
