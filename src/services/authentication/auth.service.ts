/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiURL } from '@/constants/api.constant';
import { BaseService } from '../base.service';
import { TokenResponse } from './auth.model';

export class AuthenticationService extends BaseService {
  private static _instance: AuthenticationService;

  public static getInstance(): AuthenticationService {
    return this._instance || (this._instance = new this());
  }

  login(email: string, password: string): Promise<TokenResponse> {
    const url = ApiURL.LOGIN;
    return this.post(url, { email, password });
  }

  register(data: any): Promise<TokenResponse> {
    const url = ApiURL.REGISTER;
    return this.post(url, data);
  }

  forgotPassword(email: string, password: string): Promise<TokenResponse> {
    const url = ApiURL.LOGIN;
    return this.post(url, { email, password });
  }

  changePassword(email: string, password: string): Promise<TokenResponse> {
    const url = ApiURL.LOGIN;
    return this.post(url, { email, password });
  }

  verifyEmail(email: string, otpCode: string): Promise<TokenResponse> {
    const url = ApiURL.VERIFY_EMAIL;
    return this.post(url, { email, otpCode });
  }
}
