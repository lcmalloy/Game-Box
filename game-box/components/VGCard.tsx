/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import { useRouter } from 'next/router'
import {BiChevronDown} from 'react-icons/bi'

import FavoriteButton from './FavoriteButton'
import useInfoModal from '@/hooks/useInfoModal'

interface VGCardProps {
  data: Record<string, any>
}
const VGCard: React.FC<VGCardProps> = ({data}) => {
  const router = useRouter()
  const { openModal } = useInfoModal()

  return (
  <div className="group bg-zinc-900 col-span relative h-[12vw] w-[20vw]">
    <img
    className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
    src={data.thumbnailUrl} alt="thumbnail" />
    <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[1rem] group-hover:translate-x-[2rem] group-hover:opacity-100">
      <img className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]" src={data.thumbnailUrl} alt="thumbnail" />
      <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">

        <div className="flex flex-row items-center gap-3">
          <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-transparent rounded-full flex justify-center items-center transition hover:bg-neutral-300 text-purple-500" onClick={() => {router.push(`/watch/${data?.id}`)}}>
            <BsFillPlayCircleFill size={32}/>
          </div>
          <FavoriteButton videoGameId={data?.id}/>
          <div onClick={() => openModal(data?.id)} className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-purple-500 border-2 rounded-full flex justify-center items-center transition hover:border-purple-700">
            <BiChevronDown className="text-purple-500 group-hover/item:text-purple-700" size={30}/>
          </div>
        </div>
        <p className="text-green-400 font-semibold mt-4">New <span className="text-white">2023</span></p>
        <div className="flex flex-row mt-4 gap-2 items-center">
          <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
        </div>
        <div className="flex flex-row mt-4 gap-2 items-center">
          <p className="text-white text-[10px] lg:text-sm">{data.rating}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default VGCard;