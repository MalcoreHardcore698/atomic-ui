import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

export const useHelper = () => {
  const dispatch = useDispatch()
  const recall = useCallback((helper, ...props) => helper(dispatch, ...props), [])
  return (helper, ...props) => () => recall(helper, ...props)
}

export default useHelper
