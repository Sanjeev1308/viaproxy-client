/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel } from '@/models/api.model';
import { AdsService } from '@/services/ads/ads.service';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from 'react-query';

export function useCreateAds(): UseMutationResult<any, ErrorModel, any, unknown> {
  return useMutation<any, ErrorModel, any, unknown>({
    mutationKey: ['createAds'],
    mutationFn: (data) => AdsService.getInstance().createAds(data),
  });
}

export function useUpdateAdsById(): UseMutationResult<any, ErrorModel, { id: string; data: any }, unknown> {
  return useMutation<any, ErrorModel, { id: string; data: any }, unknown>({
    mutationKey: ['updateAdsById'],
    mutationFn: ({ id, data }) => AdsService.getInstance().updateAdsById(id, data),
  });
}

export function useDeleteAdsById(): UseMutationResult<any, ErrorModel, string, unknown> {
  return useMutation<any, ErrorModel, string, unknown>({
    mutationKey: ['deleteAdsById'],
    mutationFn: (id) => AdsService.getInstance().deleteAdsById(id),
  });
}

export function useAllAds({ page, limit, sort, filter }: any): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllAds', page, limit, sort, filter],
    queryFn: () => AdsService.getInstance().getAllAds({ page, limit, sort, filter }),
  });
}

export function useAdsById(id: string): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAdsById'],
    queryFn: () => AdsService.getInstance().getAdsById(id),
    enabled: !!id,
  });
}
