import useSWR from "swr";

export function useFetchCharacterByID(id: string, token:string) {
  const { data, error } = useSWR(`https://fallofthegods-data.onrender.com/${token}/characters/story/get?id=${id}`, fetch);
  return {
    character: data,
    isLoading: !error && !data,
    isError: error,
  };
}