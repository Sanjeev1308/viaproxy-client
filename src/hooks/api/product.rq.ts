/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel } from '@/models/api.model';
import { ProductService } from '@/services/product/product.service';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from 'react-query';

export function useCreateProduct(): UseMutationResult<any, ErrorModel, any, unknown> {
  return useMutation<any, ErrorModel, any, unknown>({
    mutationKey: ['createProduct'],
    mutationFn: (data) => ProductService.getInstance().createProduct(data),
  });
}

export function useUpdateProductById(): UseMutationResult<any, ErrorModel, { id: string; data: any }, unknown> {
  return useMutation<any, ErrorModel, { id: string; data: any }, unknown>({
    mutationKey: ['updateProductById'],
    mutationFn: ({ id, data }) => ProductService.getInstance().updateProductById(id, data),
  });
}

export function useDeleteProductById(): UseMutationResult<any, ErrorModel, string, unknown> {
  return useMutation<any, ErrorModel, string, unknown>({
    mutationKey: ['deleteProductById'],
    mutationFn: (id) => ProductService.getInstance().deleteProductById(id),
  });
}

export function useAllProduct({ page, limit, sort, filter }: any): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllProduct', page, limit, sort, filter],
    queryFn: () => ProductService.getInstance().getAllProducts({ page, limit, sort, filter }),
  });
}

export function useProductById(id: string): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getProductById'],
    queryFn: () => ProductService.getInstance().getProductById(id),
    enabled: !!id,
  });
}
