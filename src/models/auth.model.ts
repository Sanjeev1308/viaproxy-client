type User = {
  id?: string;
  name?: string;
  email?: string;
  role: string;
};

export interface IAuth {
  user: User | null;
  isAuthenticated: boolean;
}
