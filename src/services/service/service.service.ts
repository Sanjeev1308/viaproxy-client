/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiURL } from '@/constants/api.constant';
import { BaseService } from '../base.service';
import { IService } from './service.model';

export class ServiceService extends BaseService {
  private static _instance: ServiceService;

  public static getInstance(): ServiceService {
    return this._instance || (this._instance = new this());
  }

  createService(data: any): Promise<IService> {
    const url = ApiURL.CREATE_SERVICE;
    return this.postFormData(url, data);
  }

  getAllServices({ page, limit, sort, filter }: any): Promise<IService> {
    const { name } = filter;
    const url = ApiURL.GET_SERVICES({ page, limit, sort, name });
    return this.get(url);
  }

  getServiceById(id: string): Promise<IService> {
    const url = ApiURL.GET_SERVICE_BY_ID(id);
    return this.get(url);
  }

  updateServiceById(id: string, data: any): Promise<IService> {
    const url = ApiURL.GET_SERVICE_BY_ID(id);
    return this.patchFormData(url, data);
  }

  deleteServiceById(id: string): Promise<IService> {
    const url = ApiURL.DELETE_SERVICE(id);
    return this.delete(url);
  }
}
