/* eslint-disable @typescript-eslint/no-explicit-any */
export const ApiURL = {
  LOGIN: 'auth/login',
  REGISTER: 'auth/register',
  VERIFY_EMAIL: 'auth/verify-email',

  GET_USERS: 'users',

  GET_OFFERS: (offerType: string, { page, limit, sort, offerTitle, proposedItem }: any) => {
    const proposedItemQuery = Array.isArray(proposedItem) ? proposedItem.join(',') : proposedItem;
    let url = `offers?page=${page}&limit=${limit}&exchangeType=${offerType}`;
    if (offerTitle) {
      url = url + `&search=${offerTitle}`;
    }

    if (proposedItemQuery) {
      url = url + `&proposedItem=${proposedItemQuery}`;
    }

    if (sort) {
      url = url + `&sort=${sort}`;
    }
    return url;
  },
  GET_MINE_OFFERS: ({ page, sort, limit, offerTitle, proposedItem }: any) => {
    const proposedItemQuery = Array.isArray(proposedItem) ? proposedItem.join(',') : proposedItem;
    let url = `offers/me?page=${page}&limit=${limit}`;
    if (offerTitle) {
      url = url + `&search=${offerTitle}`;
    }

    if (proposedItemQuery) {
      url = url + `&proposedItem=${proposedItemQuery}`;
    }

    if (sort) {
      url = url + `&sort=${sort}`;
    }
    return url;
  },
  GET_OFFER_BY_ID: (id: string) => `offers/${id}`,
  CREATE_OFFER: 'offers/offer',
  DELETE_OFFER: (id: string) => `offers/${id}`,

  GET_ALL_CONVERSATIONS: 'conversations',
  GET_ALL_MESSAGES: 'messages',
  GET_CONVERSATION_BY_USER_ID: (userId: string) => `conversations/${userId}`,
  GET_MESSAGES_BY_CONVERSATION_ID: (conversationId: string) => `messages/${conversationId}`,
  SEND_MESSAGE: 'messages',
  CREATE_CONVERSATION: 'conversations',
};
