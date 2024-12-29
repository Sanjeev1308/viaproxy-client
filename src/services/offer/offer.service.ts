/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiURL } from '@/constants/api.constant';
import { BaseService } from '../base.service';
import { IOffer } from './offer.model';

export class OfferService extends BaseService {
  private static _instance: OfferService;

  public static getInstance(): OfferService {
    return this._instance || (this._instance = new this());
  }

  createOffer(data: any): Promise<IOffer> {
    const url = ApiURL.CREATE_OFFER;
    return this.postFormData(url, data);
  }

  getAllOffers(): Promise<IOffer> {
    const url = ApiURL.GET_OFFERS;
    return this.get(url);
  }

  getOfferById(id: string): Promise<IOffer> {
    const url = ApiURL.GET_OFFER_BY_ID(id);
    return this.get(url);
  }

  updateOfferById(id: string, data: any): Promise<IOffer> {
    const url = ApiURL.GET_OFFER_BY_ID(id);
    return this.patchFormData(url, data);
  }

  deleteOfferById(id: string): Promise<IOffer> {
    const url = ApiURL.DELETE_OFFER(id);
    return this.delete(url);
  }
}
