/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Fragment } from 'react';
// Fake Data
import { useGetAllConversations } from '@/hooks/api/message.rq';

export default function AllConversationsList({ item, onItemClick }: any) {
  const { data, isLoading } = useGetAllConversations();

  if (isLoading) {
    return <div>loading</div>;
  }

  console.log('lll', data);
  return (
    <ScrollArea className="-mx-3 h-full p-3">
      {data?.data.map((chatUsr: any) => {
        const { _id, title, participants } = chatUsr;
        // const lastConvo = messages[0];
        // const lastMsg = lastConvo.sender === 'You' ? `You: ${lastConvo.message}` : lastConvo.message;
        return (
          <Fragment key={chatUsr._id}>
            <button
              type="button"
              className={cn(
                `-mx-1 flex w-full rounded-md px-2 py-2 text-left text-sm hover:bg-secondary/75`,
                item === _id && 'sm:bg-muted',
              )}
              onClick={() => {
                onItemClick(chatUsr._id);
                //   setMobileSelectedUser(chatUsr);
              }}
            >
              <div className="flex gap-2">
                <Avatar>
                  {/* <AvatarImage src={profile} alt={username} />
                  <AvatarFallback>{username}</AvatarFallback> */}
                </Avatar>
                <div>
                  <span className="col-start-2 row-span-2 font-medium">{title}</span>
                  <span className="col-start-2 row-span-2 row-start-2 line-clamp-2 text-ellipsis text-muted-foreground">
                    {participants?.map((participant: any) => participant.email).join('-')}
                  </span>
                </div>
              </div>
            </button>
            <Separator className="my-1" />
          </Fragment>
        );
      })}
    </ScrollArea>
  );
}
