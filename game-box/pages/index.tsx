import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'

import Navbar from '../components/Navbar'
import Billboard from '../components/Billboard'
import VideoGameList from '../components/VideoGameList'
import useVideoGameList from '@/hooks/useVideoGameList'
import useFavorites from '@/hooks/useFavorites'
import InfoModal from '@/components/InfoModal'
import useInfoModal from '@/hooks/useInfoModal'


export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return  {
    props: {}
  }
}

export default function Home() {
  const { data: videoGame = []} = useVideoGameList()
  const { data: favorites = []} = useFavorites()

  const { isOpen, closeModal } = useInfoModal()
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <VideoGameList title="New Release" data={videoGame}/>
        <VideoGameList title="My Favorites" data={favorites}/>
      </div>

    </>
  )
}
