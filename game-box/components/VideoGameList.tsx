import React from 'react'
import { isEmpty } from 'lodash'

import VGCard from './VGCard';

interface VideoGameListProps {
  data: Record<string, any>[];
  title: string;
}

const VideoGameList: React.FC<VideoGameListProps> = ({ data, title }) => {

  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="flex gap-4">
          {data.map((videoGame) => (
            <VGCard key={videoGame.id} data={videoGame}/>
          ))}
        </div>
      </div>
    </div>

  )
}
export default VideoGameList;