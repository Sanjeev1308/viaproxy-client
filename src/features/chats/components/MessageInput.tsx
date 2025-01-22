import { Button } from '@/components/ui/button';
import { useSendMessage } from '@/hooks/api/message.rq';
import { Send } from 'lucide-react';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';

interface Props {
  conversationId: string;
  userId: string;
  receiver: string;
}

export const MessageInput: React.FC<Props> = ({ conversationId, userId, receiver }) => {
  const [newMessage, setNewMessage] = useState('');
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useSendMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      await mutateAsync({ sender: userId, receiver, content: newMessage });
      queryClient.invalidateQueries(['getMessagesByConversationId', conversationId]);
      queryClient.invalidateQueries(['getConversationByUserId', userId]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex w-full flex-none gap-2">
      <div className="flex flex-1 items-center gap-2 rounded-md border border-input px-2 py-1 focus-within:outline-none focus-within:ring-1 focus-within:ring-ring lg:gap-4">
        <label className="flex-1">
          <span className="sr-only">Chat Text Box</span>
          <input
            type="text"
            placeholder="Type your messages..."
            className="h-8 w-full bg-inherit focus-visible:outline-none"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
          />
        </label>
        <Button variant="ghost" size="icon" className="inline-flex" onClick={handleSubmit}>
          <Send size={20} />
        </Button>
      </div>
    </div>
  );
};
