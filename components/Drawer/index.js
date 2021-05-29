import React, { Suspense } from 'react'
import styled, { css } from 'styled-components'
import Scrollbars from 'react-custom-scrollbars'

import Transition from '../Transition'
import Spinner from '../Spinner'
import Icon from '../Icon'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--default-color-overlay);
  transition: opacity 0.2s;
`

export const Side = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: auto;
  max-width: 70%;
  height: 100vh;
  background: white;
  transition: transform 0.3s;

  @media only screen and (max-width: 1098px) {
    width: calc(100% - 60px);
    max-width: 100%;

    ${({ half }) =>
      half &&
      css`
        width: 196px;
      `}
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    max-width: 100%;

    ${({ half }) =>
      half &&
      css`
        width: 196px;
      `}
  }

  ${({ half }) =>
    half &&
    css`
      width: 196px;
      margin-left: 0;
    `}
`

export const BackButton = styled(Icon)`
  position: absolute;
  top: 40px;
  right: calc(100% + 30px);
  z-index: var(--z-15);
  width: 40px;
  cursor: pointer;
  transform: translateY(-50%);
  transition: opacity 0.3s;

  @media only screen and (max-width: 1098px) {
    right: calc(100% + 12px);
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--default-gap);
  min-height: 100%;
`

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;

  &.slide-left-enter,
  &.slide-left-appear {
    ${Overlay} {
      opacity: 0;
    }

    ${Side} {
      transform: translateX(-100%);
    }

    ${BackButton} {
      opacity: 0;
    }
  }

  &.slide-left-enter-active,
  &.slide-left-appear-active {
    ${Overlay} {
      opacity: 1;
    }

    ${Side} {
      transform: initial;
      transition-delay: 150ms;
    }

    ${BackButton} {
      opacity: 1;
    }
  }

  &.slide-left-exit {
    ${Overlay} {
      opacity: 1;
    }

    ${Side} {
      transform: initial;
    }

    ${BackButton} {
      opacity: 1;
    }
  }

  &.slide-left-exit-active {
    ${Overlay} {
      opacity: 0;
    }

    ${Side} {
      transform: translateX(-100%);
    }

    ${BackButton} {
      opacity: 0;
    }
  }

  &.slide-right-enter,
  &.slide-right-appear {
    ${Overlay} {
      opacity: 0;
    }

    ${Side} {
      transform: translateX(100%);
    }

    ${BackButton} {
      opacity: 0;
    }
  }

  &.slide-right-enter-active,
  &.slide-right-appear-active {
    ${Overlay} {
      opacity: 1;
    }

    ${Side} {
      transform: initial;
      transition-delay: 150ms;
    }

    ${BackButton} {
      opacity: 1;
    }
  }

  &.slide-right-exit {
    ${Overlay} {
      opacity: 1;
    }

    ${Side} {
      transform: initial;
    }

    ${BackButton} {
      opacity: 1;
    }
  }

  &.slide-right-exit-active {
    ${Overlay} {
      opacity: 0;
    }

    ${Side} {
      transform: translateX(100%);
    }

    ${BackButton} {
      opacity: 0;
    }
  }
`

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  flex-grow: 1;
`

export const Drawer = ({ children, side, half, isOpen, onBack, ...props }) => (
  <Transition
    in={isOpen}
    timeout={{
      appear: 500,
      enter: 500,
      exit: 300
    }}
    animation={side === 'right' ? 'slide-right' : 'slide-left'}
    unmountOnExit
    appear
    {...props}>
    <Wrapper {...props}>
      <Overlay onClick={onBack} />

      <Side half={half}>
        <BackButton onClick={onBack} icon={'arrowLeft'} size={64} stroke={'white'} />

        <Scrollbars>
          <Content>
            <Suspense
              fallback={
                <Loader>
                  <Spinner />
                </Loader>
              }>
              {children}
            </Suspense>
          </Content>
        </Scrollbars>
      </Side>
    </Wrapper>
  </Transition>
)

export default Drawer
