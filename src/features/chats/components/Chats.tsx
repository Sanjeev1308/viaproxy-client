import { useTypedSelector } from '@/hooks/useTypedSelector';
import { ChatContent } from './ChatContent';

export const ChatApp: React.FC = () => {
  const { user } = useTypedSelector((state) => state.auth);

  return <ChatContent userId={user?.id || ''} />;
};
