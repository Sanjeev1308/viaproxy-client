export const ApiURL = {
  LOGIN: 'auth/login',
  REGISTER: 'auth/register',
  VERIFY_EMAIL: 'auth/verify-email',

  GET_USERS: 'users',

  GET_OFFERS: 'offers',
  GET_OFFER_BY_ID: (id: string) => `offers/${id}`,
  CREATE_OFFER: 'offers/offer',
  DELETE_OFFER: (id: string) => `offers/${id}`,
};
