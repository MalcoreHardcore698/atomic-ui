import React from 'react'
import styled, { css } from 'styled-components'
import ReactTooltip from 'react-tooltip'
import { v4 } from 'uuid'

export const Wrap = styled.div`
  position: relative;
  display: inline-flex;
`

export const Content = styled(ReactTooltip)`
  padding: 7px 10px !important;
  font-size: var(--font-size-s) !important;
  line-height: 14px !important;
  background: rgba(0, 0, 0, 0.7) !important;
  border-radius: var(--surface-border-radius) !important;
  border: none !important;
  color: white !important;
  opacity: 0.9;

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth}px !important;
    `}
`

export const Tooltip = ({ text, self, children, style, className, maxWidth, ...props }) => {
  const id = `tooltip-${v4()}`

  return (
    <Wrap className={className} style={style}>
      {React.cloneElement(self ? <div>{children}</div> : children, {
        ...{
          'data-arrow-color': 'rgba(0, 0, 0, .7)',
          'data-tip': true,
          'data-for': id
        }
      })}
      <Content id={id} {...props} maxWidth={maxWidth}>
        <span>{text}</span>
      </Content>
    </Wrap>
  )
}

Tooltip.defaultProps = {
  place: 'top',
  effect: 'solid',
  delayShow: 500
}

export default Tooltip
