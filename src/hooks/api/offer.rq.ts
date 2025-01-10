/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel } from '@/models/api.model';
import { OfferService } from '@/services/offer/offer.service';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from 'react-query';

export function useCreateOffer(): UseMutationResult<any, ErrorModel, any, unknown> {
  return useMutation<any, ErrorModel, any, unknown>({
    mutationKey: ['createOffer'],
    mutationFn: (data) => OfferService.getInstance().createOffer(data),
  });
}

export function useUpdateOfferById(): UseMutationResult<any, ErrorModel, { id: string; data: any }, unknown> {
  return useMutation<any, ErrorModel, { id: string; data: any }, unknown>({
    mutationKey: ['updateOfferById'],
    mutationFn: ({ id, data }) => OfferService.getInstance().updateOfferById(id, data),
  });
}

export function useDeleteOfferById(): UseMutationResult<any, ErrorModel, string, unknown> {
  return useMutation<any, ErrorModel, string, unknown>({
    mutationKey: ['deleteOfferById'],
    mutationFn: (id) => OfferService.getInstance().deleteOfferById(id),
  });
}

export function useAllOffers(
  exchangeType: string,
  { page, limit, sort, filter }: any,
): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllOffers', exchangeType, page, limit, sort, filter],
    queryFn: () => OfferService.getInstance().getAllOffers(exchangeType, { page, limit, sort, filter }),
  });
}

export function useAllExchangeOffers({ page, limit, sort, filter }: any): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllExchangeOffers', page, limit, sort, filter],
    queryFn: () => OfferService.getInstance().getAllOffers('exchange', { page, limit, sort, filter }),
  });
}

export function useAllDonationOffers({ page, limit, sort, filter }: any): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllDonationOffers', page, limit, sort, filter],
    queryFn: () => OfferService.getInstance().getAllOffers('donate', { page, limit, sort, filter }),
  });
}

export function useAllSalesOffers({ page, limit, sort, filter }: any): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllSalesOffers', page, limit, sort, filter],
    queryFn: () => OfferService.getInstance().getAllOffers('sale', { page, limit, sort, filter }),
  });
}

export function useAllMineOffers({ page, limit, sort, filter }: any): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllMineOffers', page, limit, sort, filter],
    queryFn: () => OfferService.getInstance().getAllMineOffers({ page, limit, sort, filter }),
  });
}

export function useOfferById(id: string): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllOffers'],
    queryFn: () => OfferService.getInstance().getOfferById(id),
    enabled: !!id,
  });
}
