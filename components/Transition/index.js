import React from 'react'
import { CSSTransition } from 'react-transition-group'

export const Transition = ({ children, animation, ...props }) => (
  <CSSTransition {...props} classNames={animation}>
    {children}
  </CSSTransition>
)

Transition.defaultProps = {
  animation: 'fade',
  timeout: 100,
  unmountOnExit: true,
  onEnter: null,
  onExited: null
}

export default Transition
