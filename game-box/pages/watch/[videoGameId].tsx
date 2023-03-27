import React from 'react'
import { useRouter } from 'next/router';
import useVideoGame from '@/hooks/useVideoGame';

import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

const Watch = () => {
  const router = useRouter();
  const { videoGameId } = router.query;

  const {data} = useVideoGame(videoGameId as string)

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black/70">
        <BsFillArrowLeftCircleFill onClick={() => router.push('/')} className="text-purple-500 cursor-pointer hover:text-purple-700 transition" size={40}/>
        <p className='text-white text-1xl md:text-3xl font-bold'>
          <span className='font-light p-2'>
            Watching:
          </span>
          {data?.title}
        </p>
      </nav>
      <video src={data?.videoUrl} className="h-full w-full" autoPlay controls></video>
    </div>
  )
}
export default Watch;