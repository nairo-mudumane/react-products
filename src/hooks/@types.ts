export type UseInputTextErrors<T> = { errors: T };

export interface IUseInputText<T>
  extends Pick<UseInputTextErrors<T>, "errors"> {
  onChange: (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (event: React.FocusEvent<any, Element>) => void;
  clear: () => void;
  updateErrors: (newErrors: { [k: string]: string }) => void;
  updateInitial: (key: string, value: string | number) => void;
}

export type QueryParamOptions = { replace?: boolean };

export type QueryParam = { [k: string]: string };

export interface UseQueryParams {
  get: (key: string) => string | undefined;
  set: (key: string, value: string, options?: QueryParamOptions) => void;
  remove: (key: string) => void;
}
