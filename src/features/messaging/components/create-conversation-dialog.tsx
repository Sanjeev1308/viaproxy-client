/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConfirmDialog } from '@/components/confirm-dialog';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useUserAdvanceSearch } from '@/hooks/api/user.rq';
import { toast } from '@/hooks/use-toast';
import { KeyboardEvent, useState } from 'react';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateConversationDialog({ open, onOpenChange }: Props) {
  const [name, setName] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const { mutateAsync, data, isLoading: isUserLoading } = useUserAdvanceSearch();

  const handleSendClick = () => {
    onOpenChange(false);
    toast({
      variant: 'success',
      title: 'The message has been sent',
    });
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      await mutateAsync({ search: name });
    }
  };

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      handleConfirm={handleSendClick}
      disabled={isUserLoading || !selectedUser}
      title={<span>Search User</span>}
      desc={
        <div className="space-y-4">
          <p className="mb-2">Please enter First Name or email and hit enter to search</p>

          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter first name or email"
          />

          <div>
            {isUserLoading ? (
              <div>loading...</div>
            ) : (
              data?.data.map((user: any) => (
                <Card
                  key={user.email}
                  className={`mb-2 p-2 hover:bg-green-300 cursor-pointer ${selectedUser === user.email ? 'bg-green-300' : ''}`}
                  onClick={() => setSelectedUser(user.email)}
                >
                  <h6>
                    {user.firstName} {user.lastName}
                  </h6>
                  <p>{user.email}</p>
                </Card>
              ))
            )}
          </div>
        </div>
      }
      confirmText="Start Conversation"
    />
  );
}
