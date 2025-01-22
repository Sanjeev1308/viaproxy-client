/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiURL } from '@/constants/api.constant';
import { BaseService } from '../base.service';

export class MessageService extends BaseService {
  private static _instance: MessageService;

  public static getInstance(): MessageService {
    return this._instance || (this._instance = new this());
  }

  getAllConversations(): Promise<any> {
    const url = ApiURL.GET_ALL_CONVERSATIONS;
    return this.get(url);
  }

  getAllMessages(): Promise<any> {
    const url = ApiURL.GET_ALL_MESSAGES;
    return this.get(url);
  }

  getMessagesByConversationId(conversationId: string): Promise<any> {
    const url = ApiURL.GET_MESSAGES_BY_CONVERSATION_ID(conversationId);
    return this.get(url);
  }

  getConversationsByUserId(userId: string): Promise<any> {
    const url = ApiURL.GET_CONVERSATION_BY_USER_ID(userId);
    return this.get(url);
  }

  sendMessage(data: any): Promise<any> {
    const url = ApiURL.SEND_MESSAGE;
    return this.post(url, data);
  }

  createConversation(data: any): Promise<any> {
    const url = ApiURL.CREATE_CONVERSATION;
    return this.post(url, data);
  }

  markMessagesAsRead(conversationId: string, userId: string): Promise<any> {
    const url = ApiURL.MARK_AS_READ(conversationId);
    return this.put(url, { userId });
  }
}
