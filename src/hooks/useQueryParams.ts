/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from 'react-router-dom';

export function useQueryParams() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const params: any = {};

  for (const param of searchParams) {
    params[param[0]] = param[1];
  }

  return params;
}
