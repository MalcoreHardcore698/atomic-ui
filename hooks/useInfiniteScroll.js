import { useState, useEffect } from 'react'

export const useInfiniteScroll = (fetchCallback) => {
  const [isFetching, setIsFetching] = useState(false)

  const onScroll = () => {
    const offsetHeight = document.documentElement.scrollHeight
    const innerHeight = window.innerHeight
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

    if (isFetching || ((innerHeight + scrollTop) !== offsetHeight))
      return

    setIsFetching(true)
  }

  useEffect(() => {
    if (!isFetching) return
    fetchCallback()
  }, [isFetching])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return [isFetching, setIsFetching]
}

export default useInfiniteScroll
