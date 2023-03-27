import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

const useVideoGame = (id?: string) => {
  const { data, error, isLoading } = useSWR(id ? `/api/videogames/${id}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return { data, error, isLoading }
}

export default useVideoGame