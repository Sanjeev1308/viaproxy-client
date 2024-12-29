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

export function useAllOffers(): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllOffers'],
    queryFn: () => OfferService.getInstance().getAllOffers(),
  });
}

export function useOfferById(id: string): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllOffers'],
    queryFn: () => OfferService.getInstance().getOfferById(id),
    enabled: !!id,
  });
}
