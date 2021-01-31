import { useDispatch } from 'react-redux'
import { setMutate } from '../store/actions/root'

export const useMutate = () => {
  const dispatch = useDispatch()
  return (mutation, variables, callback) => () => dispatch(setMutate(mutation, variables, callback))
}

export default useMutate
