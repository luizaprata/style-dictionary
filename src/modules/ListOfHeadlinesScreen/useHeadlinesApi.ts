import useApi from '@/hooks/useApi';
import { HeadlinesApiResponse } from '@/types/Headline.types';
import { useEffect } from 'react';

export default function useHeadlinesApi() {
  const { isLoading, errorMessage, payload, clearErrorMessage, fetchData } =
    useApi<HeadlinesApiResponse>('get', 'top-headlines/country=br/');

  useEffect(() => {
    fetchData();
    return () => {};
  }, [fetchData]);

  return { payload, isLoading, errorMessage, clearErrorMessage };
}
