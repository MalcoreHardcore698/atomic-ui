import { useCallback, useEffect, useRef } from 'react'

export const useClickOutside = (callBack) => {
  const rootRef = useRef(null)

  const onClickOutside = useCallback(
    (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        callBack()
      }
    },
    [rootRef, callBack]
  )

  useEffect(() => {
    window.addEventListener('click', onClickOutside)

    return () => {
      window.removeEventListener('click', onClickOutside)
    }
  }, [onClickOutside])

  return [rootRef]
}

export default useClickOutside
