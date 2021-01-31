import styled from 'styled-components'
import React, { useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

export const Container = styled.div`
  position: relative;
`

export const Wrapper = styled.div`
  position: relative;
`

export const Toggle = ({
  label,
  button,
  transitionName,
  children,
  isOpen,
  setIsOpen,
  ...props
}) => {
  const reference = useRef(null)

  useEffect(() => {
    const clickOutside = (e) => {
      if (reference.current && !reference.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', clickOutside)
    return () => document.addEventListener('click', clickOutside)
  }, [setIsOpen])

  return (
    <Container {...props} ref={reference}>
      <Wrapper>
        {label}
        {button}
      </Wrapper>

      <CSSTransition
        in={isOpen}
        timeout={{
          appear: 500,
          enter: 500,
          exit: 300
        }}
        classNames={transitionName}
        unmountOnExit
        appear>
        {children}
      </CSSTransition>
    </Container>
  )
}

export default Toggle
