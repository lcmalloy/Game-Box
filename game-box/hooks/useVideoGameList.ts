import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

const useVideoGameList = () => {
  const { data, error, isLoading } = useSWR('/api/videogames', fetcher, {
    revalidateIfStale: false,
    revalidateOnReconnect: false,
    revalidateOnFocus: false,
  })

  return { data, error, isLoading }
}

export default useVideoGameList;