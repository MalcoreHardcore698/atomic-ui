import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import Icon from '../Icon'

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  pointer-events: none;
  transition: height 0.3s ease;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      justify-content: flex-start;
      height: auto;
      border-radius: 0;
      padding: 0;
      background: none;
      box-shadow: none;
      color: var(--default-color-accent);

      svg {
        path {
          stroke: var(--default-color-accent);
        }
      }
    `}

  ${({ appearance }) =>
    appearance === 'boxed' &&
    css`
      justify-content: space-between;
      border-radius: 6px;
      padding: 20px 25px;
      background: var(--default-color-accent);
      color: white;

      svg {
        path {
          stroke: white;
        }
      }

      &:hover {
        background: var(--default-color-accent);
        box-shadow: rgba(0, 0, 0, 15%);
      }
    `}
`

export const Content = styled.div`
  position: absolute;

  ${({ offset }) => css`
    top: ${offset}px;
  `}

  left: 0;
  width: 100%;
  pointer-events: all;
`

export const ArrowToggle = styled.span`
  display: inline-flex;
  justify-content: center;
  transform: scale(0.65);
  transition: transform 0.3s ease;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: scale(0.65) rotate(180deg);
    `}
`

export const Accordion = ({ label, children, offset = 0, withArrow = false, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const content = useRef(null)

  useEffect(() => {
    setHeight(isOpen && content.current ? content.current.scrollHeight + offset : 0)
  }, [isOpen, offset])

  useEffect(() => {
    const resize = () =>
      setHeight(isOpen && content.current ? content.current.scrollHeight + offset : 0)

    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  })

  return (
    <section>
      <Header {...props} onClick={() => setIsOpen(!isOpen)}>
        {label}

        {withArrow && (
          <ArrowToggle isOpen={isOpen}>
            <Icon icon={'arrowDown2'} />
          </ArrowToggle>
        )}
      </Header>

      <Container {...(height === undefined ? {} : { style: { height } })}>
        <Content ref={content} offset={offset}>
          {children}
        </Content>
      </Container>
    </section>
  )
}

Accordion.defaultProps = {
  offset: 15,
  appearance: 'default',
  withArrow: true
}

export default Accordion
