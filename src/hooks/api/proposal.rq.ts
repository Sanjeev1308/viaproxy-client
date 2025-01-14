/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel } from '@/models/api.model';
import { ProposalService } from '@/services/proposal/proposal.service';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from 'react-query';

export function useCreateProposal(): UseMutationResult<any, ErrorModel, any, unknown> {
  return useMutation<any, ErrorModel, any, unknown>({
    mutationKey: ['createProposal'],
    mutationFn: (data) => ProposalService.getInstance().createProposal(data),
  });
}

export function useUpdateProposalById(): UseMutationResult<any, ErrorModel, { id: string; data: any }, unknown> {
  return useMutation<any, ErrorModel, { id: string; data: any }, unknown>({
    mutationKey: ['updateProposalById'],
    mutationFn: ({ id, data }) => ProposalService.getInstance().updateProposalById(id, data),
  });
}

export function useDeleteProposalById(): UseMutationResult<any, ErrorModel, string, unknown> {
  return useMutation<any, ErrorModel, string, unknown>({
    mutationKey: ['deleteProposalById'],
    mutationFn: (id) => ProposalService.getInstance().deleteProposalById(id),
  });
}

export function useAllMineProposal({ page, limit, sort, filter }: any): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllMineProposal', page, limit, sort, filter],
    queryFn: () => ProposalService.getInstance().getAllMineProposals({ page, limit, sort, filter }),
  });
}

export function useAllRecivedProposal({ page, limit, sort, filter }: any): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllRecivedProposal', page, limit, sort, filter],
    queryFn: () => ProposalService.getInstance().getAllRecievedProposals({ page, limit, sort, filter }),
  });
}

export function useProposalById(id: string): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getProposalById'],
    queryFn: () => ProposalService.getInstance().getProposalById(id),
    enabled: !!id,
  });
}
