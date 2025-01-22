/* eslint-disable @typescript-eslint/no-explicit-any */
import { ScrollArea } from '@/components/ui/scroll-area';
import { useGetConversationByUserId } from '@/hooks/api/message.rq';
import React from 'react';

interface Props {
  userId: string;
  selectedConversation: string | null;
  onSelectConversation: (conversationId: string) => void;
  onSelectReceiver: (receiverId: string) => void;
}

export const ConversationList: React.FC<Props> = ({
  userId,
  selectedConversation,
  onSelectConversation,
  onSelectReceiver,
}) => {
  const { data: conversations, isLoading } = useGetConversationByUserId(userId);

  if (isLoading) return <div className="p-4">Loading conversations...</div>;

  return (
    <ScrollArea className="-mx-3 h-full p-3">
      {conversations?.map((conversation: any) => (
        <div
          key={conversation._id}
          className={`p-4 cursor-pointer hover:bg-gray-100 ${
            selectedConversation === conversation._id ? 'bg-blue-50' : ''
          }`}
          onClick={() => {
            onSelectConversation(conversation._id);
            const receiverId = conversation.participants.find((p: any) => p._id !== userId);
            onSelectReceiver(receiverId);
          }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">{conversation.participants.find((p: any) => p._id !== userId).email}</p>
              <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
            </div>
            {conversation.unreadCount[userId] > 0 && (
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                {conversation.unreadCount[userId]}
              </span>
            )}
          </div>
        </div>
      ))}
    </ScrollArea>
  );
};
