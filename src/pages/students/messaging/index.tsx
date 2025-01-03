import { Main } from '@/components/layout/main';
// Fake Data
import AllConversationsList from '@/features/messaging/components/all-conversation-list';
import Chats from '@/features/messaging/components/chat';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function Messaging() {
  const [conversationId, setConversationId] = useState('');

  return (
    <Main fixed>
      <section className="flex h-full gap-6">
        {/* Left Side */}
        <div className="flex w-full flex-col gap-2 sm:w-56 lg:w-72 2xl:w-80">
          <div className="sticky top-0 z-10 -mx-4 bg-background px-4 pb-3 shadow-md sm:static sm:z-auto sm:mx-0 sm:p-0 sm:shadow-none">
            <div className="flex items-center justify-between py-2">
              <div className="flex gap-2">
                <h1 className="text-2xl font-bold">Inbox</h1>
                {/* <MessageCircleIcon size={20} /> */}
              </div>

              {/* <Button size="icon" variant="ghost" className="rounded-lg">
                <Edit size={24} className="stroke-muted-foreground" />
              </Button> */}
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

          <AllConversationsList item={conversationId} onItemClick={setConversationId} />
        </div>

        {/* Right Side */}
        <Chats conversationId={conversationId} />
      </section>
    </Main>
  );
}
