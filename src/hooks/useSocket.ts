import { useEffect, useRef } from 'react';
import { useQueryClient } from 'react-query';
import io, { Socket } from 'socket.io-client';

export const useSocket = (userId: string) => {
  const socket = useRef<Socket | null>(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    socket.current = io(import.meta.env.VITE_API_BASE_URL);

    socket.current.on('receive_message', (data) => {
      queryClient.invalidateQueries(['getMessagesByConversationId', userId]);
      queryClient.invalidateQueries(['getConversationByUserId', data.message.conversationId]);
    });

    socket.current.on('messages_read', (data) => {
      queryClient.invalidateQueries(['getMessagesByConversationId', data.conversationId]);
    });

    return () => {
      socket.current?.disconnect();
    };
  }, [userId, queryClient]);

  return socket.current;
};
