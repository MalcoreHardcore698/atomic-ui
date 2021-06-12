import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import Transition from '../Transition'
import Icon from '../Icon'
import Button from '../Button'
import Title from '../Title'

const DURATION = 100

export function getPath(navigator) {
  if (!navigator || navigator.length === 0) return null

  return navigator[navigator.length - 1]
}

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--z-override);
  overflow: auto;

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 100ms, blur 100ms;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 100ms, blur 100ms;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--z-100);
  background: var(--default-color-overlay);
  cursor: pointer;
`

export const Content = styled.div`
  position: relative;
  top: 15%;
  left: 0;
  right: 0;
  z-index: var(--z-101);

  min-width: 480px;
  max-width: 80%;
  width: min-content;

  margin-block-end: 150px;
  background: var(--surface-background);
  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  box-shadow: var(--surface-shadow);

  &.swing-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  &.swing-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 100ms, transform 100ms;
  }

  &.swing-exit {
    opacity: 1;
  }

  &.swing-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 100ms, transform 100ms;
  }

  ${({ size }) =>
      size === 'l' &&
      css`
        top: 5%;
        min-width: 65%;
      `}

  @media only screen and (max-width: 768px) {
  min-width: 320px;
}

  @media only screen and (max-width: 480px) {
    min-width: 285px;
    max-width: 100%;
    width: auto;
    margin: 0 var(--default-gap);
  }
`

export const Headline = styled.div`
  position: relative;
  display: flex;
  border-bottom: var(--default-border);
  padding: var(--default-gap);
  line-height: 1;
`

export const BackButton = styled(Button)`
  position: absolute;
  top: 0;
  left: 10px;
  height: 100%;
`

export const StyledTitle = styled(Title)`
  text-align: center;
  width: 100%;

  @media only screen and (max-width: 480px) {
    font-size: var(--font-size-l);
  }
`

export const Switch = (props) => {
  const Childrens = props.children
  if (!Childrens) return null

  const path = props.path

  let Child = null
  for (const child of Childrens) {
    if (path === child.props.path) {
      Child = child
      break
    }
  }
  return Child
}

export const Route = ({ component, data, close, back, jump }) => {
  const Compoent = component
  return <Compoent data={data} close={close} back={back} jump={jump} />
}

export const Modal = ({ size, routes, closeByBackground, onHide }) => {
  const [navigator, setNavigator] = useState(['/'])
  const [content, setContent] = useState(false)
  const [animation, setAnimation] = useState(null)
  const [data, setData] = useState(null)

  const transitions = {
    fade: {
      in: routes ? true : false,
      animation: 'fade',
      onEnter: () => setContent(true),
      onExited: () => setContent(false),
      timeout: DURATION
    },
    swing: {
      in: content,
      animation: 'swing',
      timeout: DURATION
    }
  }

  const getTitle = () => {
    function compare(route) {
      return route.path === getPath(navigator)
    }

    const title = routes?.find((route) => compare(route))?.title

    return title || ''
  }

  const getRoute = () => {
    const defaultState = { back: true }
    const current = navigator[navigator.length - 1]
    const candidate = routes.find((route) => route.path === current)
    if (candidate) {
      return candidate?.back ?? defaultState
    }
    return defaultState
  }

  const handleBack = () => {
    setAnimation('slideOutRight')
    setTimeout(() => {
      setNavigator([...navigator.filter((e, i) => i !== navigator.length - 1)])
      setAnimation('slideInLeft')
    }, DURATION)
  }
  const handleJump = (path) => {
    setData(data)
    setAnimation('slideOutLeft')
    setTimeout(() => {
      setNavigator([...navigator, path])
      setAnimation('slideInRight')
    }, DURATION)
  }
  const handleClose = () => {
    setContent(false)
    setAnimation(null)

    setTimeout(() => {
      setNavigator(['/'])
      onHide()
    }, DURATION)
  }

  useEffect(() => {
    if (routes && routes.length > 0) {
      const route = routes.find((route) => route.home)
      setNavigator([route?.path || '/'])
    }
  }, [routes])

  return (
      <Transition {...transitions.fade}>
        <Wrap>
          <Overlay
              className={!closeByBackground ? 'clear' : ''}
              onClick={closeByBackground ? handleClose : () => {}}
          />

          <Transition {...transitions.swing}>
            <Content className={`animate${animation ? ` ${animation}` : ''}`} size={size}>
              {getTitle() && (
                  <Headline>
                    {navigator.length > 1 && getRoute().back && (
                        <BackButton onClick={handleBack} appearance={'clear'}>
                          <Icon icon={'arrowLeft'} />
                        </BackButton>
                    )}

                    <StyledTitle tag={'h3'}>{getTitle()}</StyledTitle>
                  </Headline>
              )}

              <Switch path={getPath(navigator)}>
                {(routes || []).map((props, key) => (
                    <Route
                        key={key}
                        {...props}
                        data={data}
                        close={handleClose}
                        back={handleBack}
                        jump={handleJump}
                    />
                ))}
              </Switch>
            </Content>
          </Transition>
        </Wrap>
      </Transition>
  )
}

Modal.defaultProps = {
  title: 'Modal Title',
  routes: [],
  onHide: () => {},
  closeByBackground: true
}

export default Modal
