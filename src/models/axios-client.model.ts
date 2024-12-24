/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Client {
  get<T>(path: string): Promise<T>;
  post<T>(path: string, data: any): Promise<T>;
  put<T>(path: string, data: any): Promise<T>;
  patch<T>(path: string, data: any): Promise<T>;
  delete<T>(path: string): Promise<T>;
}
