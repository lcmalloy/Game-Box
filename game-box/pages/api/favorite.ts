import { NextApiRequest, NextApiResponse } from "next";
import _, { without } from 'lodash'

import prismadb from '@/lib/prismadb'
import serverAuth from '@/lib/serverAuth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
    if (req.method === 'POST') {
      const { currentUser } = await serverAuth(req);
      const { videoGameId } = req.body

      const existingVideoGame = await prismadb.videoGame.findUnique({
        where: {
          id: videoGameId,
        }
      })

      if (!existingVideoGame) {
        throw new Error('Invalid ID')
      }
      const user = await prismadb.user.update({
        where: {
          email: currentUser?.email || '',
        },
        data: {
          favoriteIds: {
            push: videoGameId,
          }
        }
      })
      return res.status(200).json(user);
    }

    if (req.method === 'DELETE') {
      const { currentUser } = await serverAuth(req);
      const { videoGameId } = req.body
      const existingVideoGame = await prismadb.videoGame.findUnique({
        where: {
          id: videoGameId,
        }
      })

      if (!existingVideoGame) {
        throw new Error('Invalid ID')
      }
      const updatedFavoriteIds = without(currentUser.favoriteIds, videoGameId)
      const updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email || '',
        },
        data: {
          favoriteIds: updatedFavoriteIds
        }
      })
      return res.status(200).json(updatedUser);
    }
    return res.status(405).end();
  }catch(error) {
    console.log(error);
    return res.status(400).end();
  }

}