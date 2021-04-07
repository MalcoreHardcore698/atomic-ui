import React from 'react'
import YouTube from 'react-youtube'
import Vimeo from 'react-vimeo'

export const VideoPresentation = ({ type, videoId }) => {
  return (
    <div>
      {type === 'youtube' ? (
        <YouTube videoId={videoId}></YouTube>
      ) : (
        <Vimeo videoId={videoId} autoplay={true} />
      )}
    </div>
  )
}

export default VideoPresentation
