import React, {useCallback, useMemo} from 'react'
import axios from 'axios'
import {BsPlusCircleDotted, BsCheck2Circle} from 'react-icons/bs'

import useCurrentUser from '@/hooks/useCurrentUser'
import useFavorites from '@/hooks/useFavorites'

interface FavoriteButtonProps {
  videoGameId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  videoGameId
}) => {
  const { mutate: mutateFavorites } = useFavorites()
  const { data: currentUser, mutate } = useCurrentUser()

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(videoGameId)
  }, [currentUser, videoGameId])

  const toggleFavorites = useCallback(async () => {
    let response;
    if (isFavorite) {
      response = await axios.delete('/api/favorite', { data: {videoGameId}})
    } else {
      response = await axios.post('/api/favorite', { videoGameId })
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;
    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds
    });

    mutateFavorites();
  }, [videoGameId, isFavorite, currentUser, mutate, mutateFavorites])

  const Icon = isFavorite ? BsCheck2Circle : BsPlusCircleDotted;
  return (
    <div className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-transparent border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300 text-purple-500" onClick={toggleFavorites}>
      <Icon size={40}/>
    </div>
  )
}
export default FavoriteButton