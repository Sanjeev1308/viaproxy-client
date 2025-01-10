/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel } from '@/models/api.model';
import { UserService } from '@/services/user/user.service';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from 'react-query';

export function useCreateUser(): UseMutationResult<any, ErrorModel, any, unknown> {
  return useMutation<any, ErrorModel, any, unknown>({
    mutationKey: ['createUser'],
    mutationFn: (data) => UserService.getInstance().createUser(data),
  });
}

export function useUpdateUserById(): UseMutationResult<any, ErrorModel, { id: string; data: any }, unknown> {
  return useMutation<any, ErrorModel, { id: string; data: any }, unknown>({
    mutationKey: ['updateUserById'],
    mutationFn: ({ id, data }) => UserService.getInstance().updateUserById(id, data),
  });
}

export function useDeleteUserById(): UseMutationResult<any, ErrorModel, string, unknown> {
  return useMutation<any, ErrorModel, string, unknown>({
    mutationKey: ['deleteUserById'],
    mutationFn: (id) => UserService.getInstance().deleteUserById(id),
  });
}

export function useAllUsers({ page, limit, sort, filter }: any): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllUsers', page, limit, sort, filter],
    queryFn: () => UserService.getInstance().getAllUsers({ page, limit, sort, filter }),
  });
}

export function useUserById(id: string): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getUserById'],
    queryFn: () => UserService.getInstance().getUserById(id),
    enabled: !!id,
  });
}

export function useUserAdvanceSearch(): UseMutationResult<any, ErrorModel, any, unknown> {
  return useMutation<any, ErrorModel, any, unknown>({
    mutationKey: ['userAdvanceSearch'],
    mutationFn: (data: any) => UserService.getInstance().getUserAdvanceSearch(data),
  });
}
