/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel } from '@/models/api.model';
import { ServiceService } from '@/services/service/service.service';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from 'react-query';

export function useCreateService(): UseMutationResult<any, ErrorModel, any, unknown> {
  return useMutation<any, ErrorModel, any, unknown>({
    mutationKey: ['createService'],
    mutationFn: (data) => ServiceService.getInstance().createService(data),
  });
}

export function useUpdateServiceById(): UseMutationResult<any, ErrorModel, { id: string; data: any }, unknown> {
  return useMutation<any, ErrorModel, { id: string; data: any }, unknown>({
    mutationKey: ['updateServiceById'],
    mutationFn: ({ id, data }) => ServiceService.getInstance().updateServiceById(id, data),
  });
}

export function useDeleteServiceById(): UseMutationResult<any, ErrorModel, string, unknown> {
  return useMutation<any, ErrorModel, string, unknown>({
    mutationKey: ['deleteServiceById'],
    mutationFn: (id) => ServiceService.getInstance().deleteServiceById(id),
  });
}

export function useAllService({ page, limit, sort, filter }: any): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllService', page, limit, sort, filter],
    queryFn: () => ServiceService.getInstance().getAllServices({ page, limit, sort, filter }),
  });
}

export function useServiceById(id: string): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getServiceById'],
    queryFn: () => ServiceService.getInstance().getServiceById(id),
    enabled: !!id,
  });
}
