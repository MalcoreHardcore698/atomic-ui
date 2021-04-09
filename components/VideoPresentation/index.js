import React from 'react'
import YouTube from 'react-youtube'
import Vimeo from 'react-vimeo'

export const parseUrl = (url) => {
  if (url instanceof URL) {
    const href = url.href
    if (href.includes('youtube')) {
      const videoId = new URLSearchParams(url.search).get('v')
      return { type: 'youtube', videoId }
    }
    if (href.includes('vimeo')) {
      const regExpVimeo = /https:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/
      const matchVimeo = url.href.match(regExpVimeo)
      return { type: 'vimeo', videoId: matchVimeo[2] }
    }
  }
  return false
}

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
