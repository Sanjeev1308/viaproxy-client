import { ErrorModel } from '@/models/api.model';
import { TokenResponse } from '@/services/authentication/auth.model';
import { AuthenticationService } from '@/services/authentication/auth.service';
import { useMutation, UseMutationResult } from 'react-query';

export function useLogin(): UseMutationResult<TokenResponse, ErrorModel, { email: string; password: string }, unknown> {
  return useMutation<TokenResponse, ErrorModel, { email: string; password: string }, unknown>({
    mutationKey: ['login'],
    mutationFn: ({ email, password }) => AuthenticationService.getInstance().login(email, password),
  });
}

export function useRegister(): UseMutationResult<
  TokenResponse,
  ErrorModel,
  { firstName: string; lastName: string; email: string; password: string; role: string },
  unknown
> {
  return useMutation<
    TokenResponse,
    ErrorModel,
    { firstName: string; lastName: string; email: string; password: string; role: string },
    unknown
  >({
    mutationKey: ['register'],
    mutationFn: ({ firstName, lastName, email, password, role }) =>
      AuthenticationService.getInstance().register({ firstName, lastName, email, password, role: { name: role } }),
  });
}

export function useForgotPassword(): UseMutationResult<
  TokenResponse,
  ErrorModel,
  { email: string; password: string },
  unknown
> {
  return useMutation<TokenResponse, ErrorModel, { email: string; password: string }, unknown>({
    mutationKey: ['login'],
    mutationFn: ({ email, password }) => AuthenticationService.getInstance().login(email, password),
  });
}

export function useChangePassword(): UseMutationResult<
  TokenResponse,
  ErrorModel,
  { email: string; password: string },
  unknown
> {
  return useMutation<TokenResponse, ErrorModel, { email: string; password: string }, unknown>({
    mutationKey: ['login'],
    mutationFn: ({ email, password }) => AuthenticationService.getInstance().login(email, password),
  });
}

export function useVerifyEmail(): UseMutationResult<
  TokenResponse,
  ErrorModel,
  { email: string; OTPCode: string },
  unknown
> {
  return useMutation<TokenResponse, ErrorModel, { email: string; OTPCode: string }, unknown>({
    mutationKey: ['verifyEmail'],
    mutationFn: ({ email, OTPCode }) => AuthenticationService.getInstance().verifyEmail(email, OTPCode),
  });
}
