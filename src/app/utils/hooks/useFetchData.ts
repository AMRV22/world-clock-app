import { useQuery,  } from "@tanstack/react-query";


export const useFetchData = (query: any) => {

  const { loading, error, data } = useQuery(query);


  return { loading, error, data };
};