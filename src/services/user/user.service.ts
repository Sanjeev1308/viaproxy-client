import { ApiURL } from '@/constants/api.constant';
import { BaseService } from '../base.service';
import { IUser } from './user.model';

export class UserService extends BaseService {
  private static _instance: UserService;

  public static getInstance(): UserService {
    return this._instance || (this._instance = new this());
  }

  getAllUsers(): Promise<IUser> {
    const url = ApiURL.GET_USERS;
    return this.get(url);
  }
}
