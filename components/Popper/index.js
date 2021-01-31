import React from 'react'
import styled, { css } from 'styled-components'
import ReactTooltip from 'react-tooltip'
import { v4 } from 'uuid'

export const Wrap = styled.div`
  position: relative;
  display: inline-flex;
`

export const Content = styled(ReactTooltip)`
  padding: var(--default-gap) !important;
  border: 1px solid var(--surface-border) !important;
  background: var(--surface-background) !important;
  box-shadow: var(--default-shadow) !important;
  border-radius: var(--surface-border-radius) !important;
  border: none !important;
  pointer-events: initial !important;

  ${({ appearance }) => (appearance === 'clear') && css`
    padding: 0 !important;
    border: none !important;
    box-shadow: var(--default-shadow) !important;
  `}

  &.show {
    opacity: 1 !important;
  }

  &::after {
    display: none !important;
  }

  ${({ width }) => (width) && css`
    width: ${width || 'auto'} !important;
  `}
`

export const Popper = ({ body, appearance, children, width, ...props }) => {
  const id = `popper-${v4()}`

  return (
    <Wrap>
      <div
        data-event={'click focus'}
        data-for={id}
        data-tip
      >
        {children}
      </div>
      <Content
        {...props}
        id={id}
        width={width}
        globalEventOff={'click'}
        appearance={appearance}
      >
        {body}
      </Content>
    </Wrap>
  )
}

Popper.defaultProps = {
  place: 'top',
  effect: 'solid',
  appearance: 'default'
}

export default Popper
