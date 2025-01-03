import { ConfirmDialog } from '@/components/confirm-dialog';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

interface Props {
  isLoading?: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: string;
  handleConfirm: (id: string, message: string) => void;
}

export function MessageDialog({ open, onOpenChange, userId, handleConfirm, isLoading = false }: Props) {
  const [message, setMessage] = useState('');
  const handleSendClick = () => {
    if (handleConfirm) {
      handleConfirm(userId, message);
    }
    onOpenChange(false);
    toast({
      variant: 'success',
      title: 'The message has been sent',
    });
  };

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      handleConfirm={handleSendClick}
      disabled={isLoading || !message}
      title={<span>Send Message</span>}
      desc={
        <div className="space-y-4">
          <p className="mb-2">Please sent some message to continue</p>

          <Textarea value={message} onChange={(event) => setMessage(event.target.value)} />
        </div>
      }
      confirmText="Send"
    />
  );
}
