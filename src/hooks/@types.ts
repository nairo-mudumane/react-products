export type UseInputTextErrors<T> = { errors: T };

export type QueryParamOptions = { replace?: boolean };

export type QueryParam = { [k: string]: string };

export interface UseQueryParams {
  get: (key: string) => string | undefined;
  set: (key: string, value: string, options?: QueryParamOptions) => void;
  remove: (key: string) => void;
}
