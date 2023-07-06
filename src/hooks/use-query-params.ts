import { useSearchParams } from "react-router-dom";
import { QueryParamOptions, UseQueryParams } from "./@types";

export function useQueryParams(): UseQueryParams {
  const [searchParams, setSearchParams] = useSearchParams();

  function get(key: string): string | undefined {
    const result = searchParams.get(key);
    if (result === null || !result) {
      return undefined;
    }
    return decodeURIComponent(String(result));
  }

  function set(key: string, value: string, options?: QueryParamOptions): void {
    if (options && options.replace) {
      setSearchParams({ key: encodeURIComponent(String(value)) });
      return;
    }

    searchParams.set(key, value);
    return setSearchParams([...searchParams.entries()]);
  }

  function remove(key: string): void {
    searchParams.delete(key);
    setSearchParams(searchParams);
    return;
  }

  return { get, set, remove };
}
