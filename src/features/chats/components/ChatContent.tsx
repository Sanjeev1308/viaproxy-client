import { Main } from '@/components/layout/main';
import { Button } from '@/components/ui/button';
import { CreateConversationDialog } from '@/features/messaging/components/create-conversation-dialog';
import { useSocket } from '@/hooks/useSocket';
import { Plus, Search } from 'lucide-react';
import { useState } from 'react';
import { ConversationList } from './ConversationList';
import { MessageInput } from './MessageInput';
import { MessageList } from './MessageList';

export const ChatContent: React.FC<{ userId: string }> = ({ userId }) => {
  const [isMessageDialogOpen, setMessageDialogOpen] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [selectedReceiver, setSelectedReceiver] = useState<string | null>(null);
  const socket = useSocket(userId);

  return (
    <>
      <Main fixed>
        <section className="flex h-full gap-6 ">
          <div className="flex w-full flex-col gap-2 sm:w-56 lg:w-72 2xl:w-80">
            <div className="sticky top-0 z-10 -mx-4 bg-background px-4 pb-3 shadow-md sm:static sm:z-auto sm:mx-0 sm:p-0 sm:shadow-none">
              <div className="flex items-center justify-between py-2">
                <div className="flex gap-2">
                  <h1 className="text-2xl font-bold">Inbox</h1>
                  {/* <MessageCircleIcon size={20} /> */}
                </div>

                <Button size="icon" variant="ghost" className="rounded-lg" onClick={() => setMessageDialogOpen(true)}>
                  <Plus size={24} />
                </Button>
              </div>

              <label className="flex h-12 w-full items-center space-x-0 rounded-md border border-input pl-2 focus-within:outline-none focus-within:ring-1 focus-within:ring-ring">
                <Search size={15} className="mr-2 stroke-slate-500" />
                <span className="sr-only">Search</span>
                <input
                  type="text"
                  className="w-full flex-1 bg-inherit text-sm focus-visible:outline-none"
                  placeholder="Search chat..."
                  // value={search}
                  // onChange={(e) => setSearch(e.target.value)}
                />
              </label>
            </div>

            <ConversationList
              userId={userId}
              selectedConversation={selectedConversation}
              onSelectConversation={setSelectedConversation}
              onSelectReceiver={setSelectedReceiver}
            />
          </div>

          {selectedConversation ? (
            <div className="flex-1 flex flex-col">
              <MessageList conversationId={selectedConversation} userId={userId} />
              <MessageInput conversationId={selectedConversation} userId={userId} receiver={selectedReceiver || ''} />
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500 bg-secondary rounded-t-md">
              Select a conversation to start messaging
            </div>
          )}
        </section>
      </Main>

      {isMessageDialogOpen && (
        <CreateConversationDialog
          open={isMessageDialogOpen}
          onOpenChange={() => setMessageDialogOpen(!isMessageDialogOpen)}
        />
      )}
    </>
  );
};
