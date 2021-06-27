import React from 'react'
import styled, { css } from 'styled-components'
import { v4 } from 'uuid'

import Row from '../Row'
import Column from '../Column'
import Text from '../Text'
import Title from '../Title'
import Tooltip from '../Tooltip'
import Button from '../Button'
import Popper, { Wrap as WrapPopper } from '../Popper'
import Icon from '../Icon'
import Chip from '../Chip'
import Actions from './Actions'

export const ActionTooltip = styled(Tooltip)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--input-height-s);
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: all 150ms ease;

  svg {
    path {
      stroke: var(--ghost-color-text);
    }
  }

  .more_square_svg__circle {
    fill: var(--ghost-color-text);
    stroke: none;
  }

  &:hover {
    svg {
      path {
        stroke: black;
      }
    }

    .more_square_svg__circle {
      fill: black;
      stroke: none;
    }
  }
`

export const Wrap = styled(Row)`
  position: relative;
  padding-right: var(--input-height-s);
  transition: opacity 150ms ease;
  width: 100%;

  ${WrapPopper} {
    position: absolute;
    top: 0;
    right: 0;
    z-index: var(--z-10);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &:hover {
    ${ActionTooltip} {
      opacity: 1;
      visibility: visible;
    }
  }
`

export const Content = styled(Column)`
  justify-content: center;
  grid-gap: 0;

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;

      &:hover {
        opacity: 0.65;
      }
    `}
`

export const Image = styled.img`
  width: var(--input-height-m);
  height: var(--input-height-m);
  min-width: var(--input-height-m);
  min-height: var(--input-height-m);
  border-radius: var(--surface-border-radius);
  object-fit: cover;
`

export const RoundedIcon = styled(Icon)`
  width: var(--input-height-m);
  height: var(--input-height-m);
  min-width: var(--input-height-m);
  min-height: var(--input-height-m);
  background: var(--default-color-${({ color }) => color || 'accent'}-dim);
  border-radius: var(--surface-border-radius);

  ${({ disabled }) =>
    disabled &&
    css`
      background: var(--ghost-color-background);

      svg path {
        stroke: var(--ghost-color-text);
      }
    `}

  @media only screen and (max-width: 480px) {
    width: var(--input-height-s);
    height: var(--input-height-s);
    min-width: var(--input-height-s);
    min-height: var(--input-height-s);

    svg {
      transform: scale(0.85);
    }
  }
`

export const Label = styled(Text)`
  color: var(--ghost-color-text);
  font-size: var(--font-size-s);
  white-space: nowrap;
  min-width: 128px;
  max-width: 435px;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--ghost-color-text);
    `}

  ${({ stretch }) =>
    stretch &&
    css`
      width: auto;
    `}
`

export const Value = styled(Title)`
  font-weight: var(--font-weight-bold);
  line-height: 1;

  @media only screen and (max-width: 480px) {
    font-size: var(--font-size-l);
  }
`

export const MarkedText = styled(Row)`
  align-items: center;
  color: var(--ghost-color-text);
  grid-gap: 5px;

  .red {
    color: var(--default-color-red);
  }

  svg {
    margin-top: -3px;
    margin-left: -4px;
  }
`

export const getValue = (label, text, disabled) => {
  const disabledStyle = disabled ? { color: 'var(--ghost-color-text)' } : {}

  if (Array.isArray(text)) {
    const slicedFactor = 3
    return (
      <React.Fragment>
        {text.slice(0, slicedFactor).map((item) => (
          <Chip
            key={v4()}
            style={{ display: 'inline-flex' }}
            color={'ghost'}
            appearance={'outlined'}
            size={'xs'}>
            {item}
          </Chip>
        ))}
        {text.length > 5 && (
          <Chip
            style={{ display: 'inline-flex' }}
            color={'ghost'}
            appearance={'outlined'}
            size={'xs'}>
            +{text.slice(slicedFactor).length}
          </Chip>
        )}
      </React.Fragment>
    )
  }

  // eslint-disable-next-line valid-typeof
  if (typeof Text === 'funciton') {
    const Text = text
    return <Text style={disabledStyle} />
  }

  return (
    <Value style={disabledStyle} tag={!label ? 'h2' : 'h4'}>
      {text}
    </Value>
  )
}

export const Difinition = ({
  img,
  color,
  icon,
  label,
  text,
  tooltip,
  className,
  style,
  stretch,
  disabled,
  revert,
  actions,
  onLink
}) => {
  const renderLabel = () =>
    label && (
      <Label stretch={stretch} disabled={disabled}>
        {label}
      </Label>
    )

  const renderText = () =>
    tooltip ? (
      <Tooltip place={'top'} text={tooltip}>
        <Row>{getValue(label, text, disabled)}</Row>
      </Tooltip>
    ) : (
      <Row>{getValue(label, text, disabled)}</Row>
    )

  return (
    <Wrap
      className={className}
      style={style}>
      {img && !icon && <Image src={img} alt={'Avatar'} />}
      {!img && icon && (
        <RoundedIcon
          icon={icon}
          color={color}
          disabled={disabled}
          stroke={`var(--default-color-${color || 'accent'})`}
        />
      )}

      <Content clickable={!disabled && !!onLink} onClick={() => !disabled && onLink && onLink()}>
        {!revert && renderLabel()}
        {!revert && renderText()}

        {revert && renderText()}
        {revert && renderLabel()}
      </Content>

      {actions?.length > 0 && (
        <Popper
          place={'bottom'}
          offset={{ right: 68 }}
          body={<Actions key={'menu'} actions={actions} />}
          appearance={'clear'}>
          <ActionTooltip text={'Действия'}>
            <Button type={'button'} appearance={'clear'} kind={'icon'} size={'s'}>
              <Icon icon={'moreSquare'} size={'s'} />
            </Button>
          </ActionTooltip>
        </Popper>
      )}
    </Wrap>
  )
}

export default Difinition
