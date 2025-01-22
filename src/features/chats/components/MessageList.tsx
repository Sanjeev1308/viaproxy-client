/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useGetMessagesByConversationId, useMarkAsRead } from '@/hooks/api/message.rq';
import { ArrowLeft, MoreVertical } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useQueryClient } from 'react-query';

interface Props {
  conversationId: string;
  userId: string;
  handleBackToList: () => void;
}

export const MessageList: React.FC<Props> = ({ conversationId, userId, handleBackToList }) => {
  const [receiver, setReceiver] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

  const { data: messages, isLoading } = useGetMessagesByConversationId(conversationId);

  const { mutateAsync, isLoading: isMarkAsLoading } = useMarkAsRead();

  useEffect(() => {
    async function fetchData() {
      if (messages?.some((m: any) => !m.isRead && m.receiver === userId)) {
        await mutateAsync({ conversationId, userId });
        queryClient.invalidateQueries(['getMessagesByConversationId', conversationId]);
        queryClient.invalidateQueries(['getConversationByUserId', userId]);
      }
    }
    fetchData();
  }, [messages, userId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (messages?.length) {
      const receiverInfo = messages[0].sender._id === userId ? messages[0].receiver : messages[0].sender;
      setReceiver(receiverInfo);
    }
  }, [messages]);

  if (isLoading) return <div className="p-4">Loading messages...</div>;

  return (
    <>
      <div className="mb-1 flex flex-none justify-between rounded-t-md bg-secondary p-4 shadow-lg">
        {/* Left */}
        <div className="flex gap-3">
          <Button size="icon" variant="ghost" className="-ml-2 h-full sm:hidden" onClick={handleBackToList}>
            <ArrowLeft />
          </Button>
          <div className="flex items-center gap-2 lg:gap-4">
            <Avatar className="size-9 lg:size-11">
              {/* <AvatarImage src={selectedUser.profile} alt={selectedUser.username} /> */}
              {/* <AvatarFallback>{selectedUser.username}</AvatarFallback> */}
            </Avatar>
            <div>
              <span className="col-start-2 row-span-2 text-sm font-medium lg:text-base">{receiver?.email}</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="-mr-1 flex items-center gap-1 lg:gap-2">
          <Button size="icon" variant="ghost" className="h-10 rounded-md sm:h-8 sm:w-4 lg:h-10 lg:w-6">
            <MoreVertical className="stroke-muted-foreground sm:size-5" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {messages?.map((message: any) => (
          <div
            key={message._id}
            className={`mb-4 flex ${message.sender._id === userId ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender._id === userId ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              <p>{message.content}</p>
              <p className="text-xs mt-1 opacity-70">{new Date(message.createdAt).toLocaleTimeString()}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </>
  );
};
