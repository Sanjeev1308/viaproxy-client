/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel } from '@/models/api.model';
import { CategoryService } from '@/services/category/category.service';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from 'react-query';

export function useCreateCategory(): UseMutationResult<any, ErrorModel, any, unknown> {
  return useMutation<any, ErrorModel, any, unknown>({
    mutationKey: ['createCategory'],
    mutationFn: (data) => CategoryService.getInstance().createCategory(data),
  });
}

export function useUpdateCategoryById(): UseMutationResult<any, ErrorModel, { id: string; data: any }, unknown> {
  return useMutation<any, ErrorModel, { id: string; data: any }, unknown>({
    mutationKey: ['updateCategoryById'],
    mutationFn: ({ id, data }) => CategoryService.getInstance().updateCategoryById(id, data),
  });
}

export function useDeleteCategoryById(): UseMutationResult<any, ErrorModel, string, unknown> {
  return useMutation<any, ErrorModel, string, unknown>({
    mutationKey: ['deleteCategoryById'],
    mutationFn: (id) => CategoryService.getInstance().deleteCategoryById(id),
  });
}

export function useAllCategory({ page, limit, sort, filter }: any): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllCategory', page, limit, sort, filter],
    queryFn: () => CategoryService.getInstance().getAllCategories({ page, limit, sort, filter }),
  });
}

export function useCategoryById(id: string): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getCategoryById'],
    queryFn: () => CategoryService.getInstance().getCategoryById(id),
    enabled: !!id,
  });
}
