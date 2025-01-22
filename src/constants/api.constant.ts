/* eslint-disable @typescript-eslint/no-explicit-any */
export const ApiURL = {
  LOGIN: 'auth/login',
  REGISTER: 'auth/register',
  VERIFY_EMAIL: 'auth/verify-email',

  GET_USERS: ({ page, limit, sort, email, role }: any) => {
    const roleQuery = Array.isArray(role) ? role.join(',') : role;
    let url = `users?page=${page}&limit=${limit}`;
    if (email) {
      url = url + `&search=${email}`;
    }

    if (role) {
      url = url + `&role=${roleQuery}`;
    }

    if (sort) {
      url = url + `&sort=${sort}`;
    }
    return url;
  },
  GET_USER_BY_ID: (id: string) => `users/${id}`,
  CREATE_USER: 'users/user',
  DELETE_USER: (id: string) => `users/${id}`,
  GET_USERS_ADVANCE_SEARCH: 'users/advance/search',

  GET_PRODUCTS: ({ page, limit, sort, name }: any) => {
    let url = `products?page=${page}&limit=${limit}`;
    if (name) {
      url = url + `&search=${name}`;
    }

    if (sort) {
      url = url + `&sort=${sort}`;
    }
    return url;
  },
  GET_PRODUCTS_BY_ID: (id: string) => `products/${id}`,
  CREATE_PRODUCT: 'products/product',
  DELETE_PRODUCT: (id: string) => `products/${id}`,

  GET_SERVICES: ({ page, limit, sort, name }: any) => {
    let url = `services?page=${page}&limit=${limit}`;
    if (name) {
      url = url + `&search=${name}`;
    }

    if (sort) {
      url = url + `&sort=${sort}`;
    }
    return url;
  },
  GET_SERVICE_BY_ID: (id: string) => `services/${id}`,
  CREATE_SERVICE: 'services/service',
  DELETE_SERVICE: (id: string) => `services/${id}`,

  GET_CATEGORIES: ({ page, limit, sort, filter }: any) => {
    let url = `categories?page=${page}&limit=${limit}`;
    if (filter) {
      const { name, categoryType, isSubcategory } = filter;
      const categoryTypeQuery = Array.isArray(categoryType) ? categoryType.join(',') : categoryType;
      if (name) {
        url = url + `&search=${name}`;
      }

      if (categoryTypeQuery) {
        url = url + `&categoryType=${categoryTypeQuery}`;
      }

      if (isSubcategory !== undefined) {
        url = url + `&isSubcategory=${isSubcategory}`;
      }
    }

    if (sort) {
      url = url + `&sort=${sort}`;
    }
    return url;
  },
  GET_SUB_CATEGORY_BY_CATEGORY_ID: (id: string) => `categories/${id}/sub-category`,
  GET_CATEGORY_BY_ID: (id: string) => `categories/${id}`,
  CREATE_CATEGORY: 'categories/category',
  DELETE_CATEGORY: (id: string) => `categories/${id}`,

  GET_ADS: ({ page, limit, sort, name }: any) => {
    let url = `ads?page=${page}&limit=${limit}`;
    if (name) {
      url = url + `&search=${name}`;
    }

    if (sort) {
      url = url + `&sort=${sort}`;
    }
    return url;
  },
  GET_ADS_BY_ID: (id: string) => `ads/${id}`,
  CREATE_ADS: 'ads/ads',
  DELETE_ADS: (id: string) => `ads/${id}`,

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
  GET_MINE_OFFERS: (offerType: string, { page, sort, limit, offerTitle, proposedItem }: any) => {
    const proposedItemQuery = Array.isArray(proposedItem) ? proposedItem.join(',') : proposedItem;
    let url = `offers/me?page=${page}&limit=${limit}&exchangeType=${offerType}`;
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

  GET_SENT_PROPOSALS: ({ page, limit, sort, filter }: any) => {
    let url = `proposals/sent?page=${page}&limit=${limit}`;
    if (filter) {
      const { message } = filter;
      if (message) {
        url = url + `&search=${message}`;
      }
    }

    if (sort) {
      url = url + `&sort=${sort}`;
    }
    return url;
  },
  GET_RECIEVED_PROPOSALS: ({ page, limit, sort, filter }: any) => {
    let url = `proposals/recieved?page=${page}&limit=${limit}`;
    if (filter) {
      const { message } = filter;
      if (message) {
        url = url + `&search=${message}`;
      }
    }

    if (sort) {
      url = url + `&sort=${sort}`;
    }
    return url;
  },
  GET_PROPOSAL_BY_ID: (id: string) => `proposals/${id}`,
  CREATE_PROPOSAL: 'proposals/proposal',
  DELETE_PROPOSAL: (id: string) => `proposals/${id}`,

  GET_ALL_CONVERSATIONS: 'conversations',
  GET_ALL_MESSAGES: 'messages',
  GET_CONVERSATION_BY_USER_ID: (userId: string) => `conversations/${userId}`,
  GET_MESSAGES_BY_CONVERSATION_ID: (conversationId: string) => `messages/${conversationId}`,
  SEND_MESSAGE: 'send',
  CREATE_CONVERSATION: 'conversations',
  MARK_AS_READ: (conversationId: string) => `messages/read/${conversationId}`,
};
