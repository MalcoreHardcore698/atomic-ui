import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  grid-gap: 12px;

  ${({ disabled }) =>
    disabled &&
    css`
      width: 22px;
      height: 22px;
    `}

  ${({ size }) =>
    size &&
    css`
      font-size: var(--font-size-${size});
    `}

  ${({ size }) =>
    size === 'xs' &&
    css`
      grid-gap: 8px;
    `}

  ${({ size }) =>
    size === 'm' &&
    css`
      grid-gap: var(--default-gap);
    `}
`

export const Label = styled.span`
  color: rgba(0, 0, 0, 75%);

  ${({ size }) =>
    size &&
    css`
      font-size: var(--font-size-${size});
    `}
`

export const Content = styled.span`
  position: relative;
  top: 1px;
  display: flex;
  align-items: center;

  ${({ size }) =>
    size === 'xs' &&
    css`
      width: 16px;
      height: 16px;
    `}

  ${({ size }) =>
    size === 's' &&
    css`
      width: 22px;
      height: 22px;
    `}

  ${({ size }) =>
    size === 'm' &&
    css`
      width: 28px;
      height: 28px;
    `}
`

export const Checkmark = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;

  &::after,
  &::before {
    content: '';
    z-index: 0;
    position: absolute;
    border-radius: 100%;
  }

  &::before {
    top: 0;
    left: 0;
    width: calc(100% - 3px);
    height: calc(100% - 3px);
    border: 1px solid rgba(0, 0, 0, 15%);
    background: transparent;
  }

  &::after {
    transition: background 0.3s ease;

    ${({ size }) =>
      size === 'xs' &&
      css`
        top: 4px;
        left: 4px;
        width: 5px;
        height: 5px;
      `}

    ${({ size }) =>
      size === 's' &&
      css`
        top: 5px;
        left: 5px;
        width: 9px;
        height: 9px;
      `}

    ${({ size }) =>
      size === 'm' &&
      css`
        top: 5px;
        left: 5px;
        width: 15px;
        height: 15px;
      `}
  }
`

export const Input = styled.input`
  position: absolute;
  z-index: 1;

  display: block;
  width: 100%;
  height: 100%;

  margin: 0;
  opacity: 0;

  cursor: pointer;

  &:disabled {
    cursor: default;
  }

  &:disabled + span::after,
  &:disabled + span::before {
    opacity: 0.5;
  }

  &:checked + ${Checkmark} {
    &::before {
      border-color: var(--default-color-accent);
    }
  }

  &:checked + span::after {
    background: var(--default-color-accent);
  }

  &:not(:checked) + span::after {
    background: transparent;
  }
`

export const ForwardRadio = (
  { size, label, disabled, className, labelProps, placeholder, ...inputProperties },
  reference
) => {
  return (
    <Container className={className} {...labelProps} size={size} disabled={disabled}>
      <Content size={size}>
        <Input type={'radio'} {...inputProperties} ref={reference} />

        <Checkmark size={size} />
      </Content>

      <Label size={size}>{label || placeholder}</Label>
    </Container>
  )
}

export const Radio = forwardRef(ForwardRadio)

Radio.defaultProps = {
  size: 'm'
}

export default Radio
