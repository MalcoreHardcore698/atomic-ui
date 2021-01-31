import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../Row'
import Button from '../Button'

export const Wrap = styled(Row)`
  display: inline-block
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
`

export const BreadButton = styled(Button)`
  ${({ disabled }) =>
    disabled
      ? css`
          background: none;
          border: none;

          &:hover {
            background: none;
            border: none;
            color: var(--ghost-color-text);
          }
        `
      : css`
          color: var(--default-color-active);
          border: none;
          transition: opacity 150ms ease;

          &:hover {
            opacity: 0.75;
            border: none;
          }
        `}
`

export const Delimiter = styled.span`
  color: var(--input-placeholder-color);
`

export const BreadCrumb = ({ label, callback, active }) => (
  <BreadButton appearance={'clear'} disabled={!active} onClick={callback}>
    {label}
  </BreadButton>
)

export const BreadCrumbs = ({ links, callback, ...props }) => (
  <Wrap {...props}>
    {(links || []).map((link, index) => (
      <React.Fragment key={index}>
        <BreadCrumb label={link.label} callback={() => callback(link.path)} active={!!link.path} />
        {index % 2 === 0 && index !== links.length - 1 && <Delimiter>/</Delimiter>}
      </React.Fragment>
    ))}
  </Wrap>
)

export default BreadCrumbs
