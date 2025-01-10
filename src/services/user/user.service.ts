/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiURL } from '@/constants/api.constant';
import { BaseService } from '../base.service';
import { IUser } from './user.model';

export class UserService extends BaseService {
  private static _instance: UserService;

  public static getInstance(): UserService {
    return this._instance || (this._instance = new this());
  }

  createUser(data: any): Promise<IUser> {
    const url = ApiURL.CREATE_USER;
    return this.post(url, data);
  }

  getAllUsers({ page, limit, sort, filter }: any): Promise<IUser> {
    const { email, role } = filter;
    const url = ApiURL.GET_USERS({ page, limit, sort, email, role });
    return this.get(url);
  }

  getUserById(id: string): Promise<IUser> {
    const url = ApiURL.GET_USER_BY_ID(id);
    return this.get(url);
  }

  updateUserById(id: string, data: any): Promise<IUser> {
    const url = ApiURL.GET_USER_BY_ID(id);
    return this.patchFormData(url, data);
  }

  deleteUserById(id: string): Promise<IUser> {
    const url = ApiURL.DELETE_USER(id);
    return this.delete(url);
  }

  getUserAdvanceSearch(data: any): Promise<IUser> {
    const url = ApiURL.GET_USERS_ADVANCE_SEARCH;
    return this.post(url, data);
  }
}
