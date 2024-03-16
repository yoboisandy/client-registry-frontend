import { QueryClient, useQuery } from 'react-query';

export const client = new QueryClient();

export const useGlobalState = (key: any, initialData: any) => [
  useQuery([key], () => initialData, {
    enabled: false,
    initialData,
  }).data,
  (value: any) => client.setQueriesData([key], value),
];