/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiURL } from '@/constants/api.constant';
import { BaseService } from '../base.service';
import { IAds } from './ads.model';

export class AdsService extends BaseService {
  private static _instance: AdsService;

  public static getInstance(): AdsService {
    return this._instance || (this._instance = new this());
  }

  createAds(data: any): Promise<IAds> {
    const url = ApiURL.CREATE_ADS;
    return this.post(url, data);
  }

  getAllAds({ page, limit, sort, filter }: any): Promise<IAds> {
    const { name } = filter;
    const url = ApiURL.GET_ADS({ page, limit, sort, name });
    return this.get(url);
  }

  getAdsById(id: string): Promise<IAds> {
    const url = ApiURL.GET_ADS_BY_ID(id);
    return this.get(url);
  }

  updateAdsById(id: string, data: any): Promise<IAds> {
    const url = ApiURL.GET_ADS_BY_ID(id);
    return this.patch(url, data);
  }

  deleteAdsById(id: string): Promise<IAds> {
    const url = ApiURL.DELETE_ADS(id);
    return this.delete(url);
  }
}
