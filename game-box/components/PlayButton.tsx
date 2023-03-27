import React from 'react'
import {HiOutlinePlay} from 'react-icons/hi'
import { useRouter } from 'next/router'

interface PlayButtonProps {
  videoGameId: string
}

const PlayButton: React.FC<PlayButtonProps> = ({ videoGameId }) => {
  const router = useRouter()
  return (
    <button className="bg-black/70 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-gray-900 transition text-purple-700" onClick={() => router.push(`/watch/${videoGameId}`)}>
      <HiOutlinePlay size={22} className="mr-1" />
      Play
    </button>
  )
}
export default PlayButton;