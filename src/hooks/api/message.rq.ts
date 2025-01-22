/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorModel } from '@/models/api.model';
import { MessageService } from '@/services/message/message.service';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from 'react-query';

export function useSendMessage(): UseMutationResult<any, ErrorModel, any, unknown> {
  return useMutation<any, ErrorModel, any, unknown>({
    mutationKey: ['sendMessage'],
    mutationFn: (data) => MessageService.getInstance().sendMessage(data),
  });
}

export function useCreateConversation(): UseMutationResult<any, ErrorModel, any, unknown> {
  return useMutation<any, ErrorModel, any, unknown>({
    mutationKey: ['createConversation'],
    mutationFn: (data) => MessageService.getInstance().createConversation(data),
  });
}

export function useGetMessagesByConversationId(conversationId: string): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getMessagesByConversationId', conversationId],
    queryFn: () => MessageService.getInstance().getMessagesByConversationId(conversationId),
    enabled: !!conversationId,
  });
}

export function useGetConversationByUserId(userId: string): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getConversationByUserId', userId],
    queryFn: () => MessageService.getInstance().getConversationsByUserId(userId),
    enabled: !!userId,
  });
}

export function useGetAllConversations(): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllConversations'],
    queryFn: () => MessageService.getInstance().getAllConversations(),
  });
}

export function useGetAllMessages(): UseQueryResult<any, ErrorModel> {
  return useQuery<any, ErrorModel>({
    queryKey: ['getAllMessages'],
    queryFn: () => MessageService.getInstance().getAllMessages(),
  });
}

export function useMarkAsRead(): UseMutationResult<any, ErrorModel, any, unknown> {
  return useMutation<any, ErrorModel, any, unknown>({
    mutationKey: ['markAsRead'],
    mutationFn: ({ conversationId, userId }) => MessageService.getInstance().markMessagesAsRead(conversationId, userId),
  });
}
