export interface IUser {
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  country?: string;
  city?: string;
  school?: string;
  category?: string;
  isActive: boolean;
  emailVerified: boolean;
  profilePicture?: string;
  role: 'admin' | 'student' | 'eco-citizen' | 'merchant';
}
