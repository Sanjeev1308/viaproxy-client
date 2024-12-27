/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel } from '@/models/api.model';
import { UserService } from '@/services/user/user.service';
import { useQuery, UseQueryResult } from 'react-query';

export function useAllUsers(): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllUsers'],
    queryFn: () => UserService.getInstance().getAllUsers(),
  });
}
