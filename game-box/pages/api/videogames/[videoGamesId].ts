import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb'
import serverAuth from '@/lib/serverAuth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  try{
    await serverAuth(req);
    const { videoGamesId } = req.query;
    if (typeof videoGamesId !== 'string') {
      throw new Error('Invalid ID')
    }
    if (!videoGamesId) {
      throw new Error('Invalid ID')
    }
    const videoGame = await prismadb.videoGame.findUnique({
      where: {
        id: videoGamesId
      }
    })

    if (!videoGame) {
      throw new Error('Invalid ID')
    }
    return res.status(200).json(videoGame)

  }catch(error){
    console.log(error)
    res.status(400).end()
  }
}