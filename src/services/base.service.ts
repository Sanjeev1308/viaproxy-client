/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAxiosInstance } from '@/config/axios.config';
import { ErrorModel } from '@/models/api.model';
import { Client } from '@/models/axios-client.model';
import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export abstract class BaseService implements Client {
  protected static _axiosInstance: AxiosInstance;
  private service: AxiosInstance;
  private static _token: string;

  constructor() {
    this.service = BaseService.createService();
  }

  static createService() {
    if (!BaseService._axiosInstance) {
      BaseService._axiosInstance = createAxiosInstance();
      BaseService.setAuthHeaderInterceptor();
      BaseService._axiosInstance.interceptors.response.use(BaseService.handleSuccess, BaseService.handleError);
    }
    return BaseService._axiosInstance;
  }

  static setAuthToken(token: string) {
    this._token = token;
  }

  static setAuthHeaderInterceptor() {
    BaseService._axiosInstance.interceptors.request.use(
      function (config: InternalAxiosRequestConfig<any>) {
        if (BaseService._token) {
          config.headers.Authorization = `Bearer ${BaseService._token}`;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );
  }

  static handleSuccess<T>(response: AxiosResponse<T>) {
    return response.data;
  }

  static handleError(error: AxiosError) {
    const errorModel: ErrorModel = { name: 'Error', message: 'Something went wrong!' };
    if (error.response) {
      if (error.response.data) errorModel.message = error.response.data?.message;
    }
    return Promise.reject(errorModel);
  }

  get<T>(path: string): Promise<T> {
    return this.service.get(path);
  }

  post<T>(path: string, data?: any): Promise<T> {
    return this.service.post(path, data);
  }

  put<T>(path: string, data?: any): Promise<T> {
    return this.service.put(path, data);
  }

  patch<T>(path: string, data: any): Promise<T> {
    return this.service.patch(path, data);
  }

  delete<T>(path: string): Promise<T> {
    return this.service.delete(path);
  }
}
