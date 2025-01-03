/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useGetMessagesByConversationId, useSendMessage } from '@/hooks/api/message.rq';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { MoreVertical, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { IconLeft } from 'react-day-picker';
// import { io } from 'socket.io-client';

// const socket = io(import.meta.env.VITE_API_BASE_URL);

export default function Chats({ conversationId }: any) {
  const { user } = useTypedSelector((state) => state.auth);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [mobileSelectedUser, setMobileSelectedUser] = useState<any | null>(null);

  const { data: messageData, isLoading: isMessageLoading } = useGetMessagesByConversationId(conversationId);
  const { mutateAsync: mutateAsyncMessage, isLoading: isCreateMessageLoading } = useSendMessage();

  //   useEffect(() => {
  //     if (conversationId) {
  //       socket.emit('join_conversation', conversationId);
  //     }

  //     // socket.on('receive_message', () => {
  //     //   queryClient.invalidateQueries(['messages', currentConversation?._id]);
  //     // });

  //     // socket.on('message_read', ({ messageId, userId }) => {
  //     //   queryClient.setQueryData(['messages', currentConversation?._id], (oldData) =>
  //     //     oldData?.map((msg) =>
  //     //       msg._id === messageId
  //     //         ? { ...msg, readBy: [...msg.readBy, userId] }
  //     //         : msg
  //     //     )
  //     //   );
  //     // });

  //     return () => {
  //       socket.off('receive_message');
  //       //   socket.off('message_read');
  //     };
  //   }, [conversationId]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' as ScrollBehavior });
    }
  };

  const sendMessage = async () => {
    await mutateAsyncMessage({
      conversationId: conversationId,
      sender: user?.id,
      content: newMessage,
    } as any);
    // socket.emit('send_message', {
    //   conversationId: conversationId,
    //   sender: user?.id,
    //   content: newMessage,
    // } as any);
    setNewMessage('');
  };

  if (isMessageLoading) {
    return <div>loading</div>;
  }

  const messages: any[] = messageData?.data;

  return (
    <div
      className={cn(
        'absolute inset-0 hidden left-full z-50 w-full flex-1 flex-col rounded-md border bg-primary-foreground shadow-sm transition-all duration-200 sm:static sm:z-auto sm:flex',
        mobileSelectedUser && 'left-0 flex',
      )}
    >
      {conversationId ? (
        <>
          <div className="mb-1 flex flex-none justify-between rounded-t-md bg-secondary p-4 shadow-lg">
            {/* Left */}
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="ghost"
                className="-ml-2 h-full sm:hidden"
                onClick={() => setMobileSelectedUser(null)}
              >
                <IconLeft />
              </Button>
              <div className="flex items-center gap-2 lg:gap-4">
                <Avatar className="size-9 lg:size-11">
                  {/* <AvatarImage src={selectedUser.profile} alt={selectedUser.username} /> */}
                  {/* <AvatarFallback>{selectedUser.username}</AvatarFallback> */}
                </Avatar>
                <div>
                  <span className="col-start-2 row-span-2 text-sm font-medium lg:text-base">Test</span>
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

          {/* Conversation */}
          <div className="flex flex-1 flex-col gap-2 rounded-md px-4 pb-4 pt-0">
            <div className="flex size-full flex-1">
              <div className="chat-text-container relative -mr-4 flex flex-1 flex-col overflow-y-hidden">
                <div className="chat-flex flex h-40 w-full flex-grow flex-col-reverse justify-start gap-4 overflow-y-auto py-2 pb-4 pr-4">
                  {conversationId &&
                    messages.map((msg, index) => (
                      <div
                        key={`${msg.sender}-${msg.timestamp}-${index}`}
                        className={cn(
                          'chat-box max-w-72 break-words px-3 py-2 shadow-lg',
                          msg.sender === user?.id
                            ? 'self-end rounded-[16px_16px_0_16px] bg-primary/85 text-primary-foreground/75'
                            : 'self-start rounded-[16px_16px_16px_0] bg-secondary',
                        )}
                      >
                        {msg.content}{' '}
                        <span
                          className={cn(
                            'mt-1 block text-xs font-light italic text-muted-foreground',
                            msg.sender === user?.id && 'text-right',
                          )}
                        >
                          {format(msg?.createdAt, 'h:mm a')}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

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
                <Button variant="ghost" size="icon" className="hidden sm:inline-flex" onClick={sendMessage}>
                  <Send size={20} />
                </Button>
              </div>
              <Button className="h-full sm:hidden" onClick={sendMessage}>
                <Send size={18} /> Send
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center text-lg w-full h-full">Please select a chat</div>
      )}
    </div>
  );
}
