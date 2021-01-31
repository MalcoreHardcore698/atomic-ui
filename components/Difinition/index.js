import React from 'react'
import styled, { css } from 'styled-components'
import Row from '../Row'
import Column from '../Column'
import Text from '../Text'
import Title from '../Title'
import Icon from '../Icon'
import Chip from '../Chip'
import { v4 } from 'uuid'
import Tooltip from '../Tooltip'

export const Wrap = styled(Row)`
  transition: opacity 150ms ease;

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;

      &:hover {
        opacity: 0.65;
      }
    `}
`

export const Content = styled(Column)`
  justify-content: center;
  grid-gap: 0;
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
  width: 128px;
  overflow: hidden;
  text-overflow: ellipsis;

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

export const getValue = (label, text) => {
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
    return <Text />
  }

  return <Value tag={!label ? 'h2' : 'h4'}>{text}</Value>
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
  onLink
}) => (
  <Wrap className={className} style={style} clickable={!!onLink} onClick={() => onLink && onLink()}>
    {img && !icon && <Image src={img} alt={'Avatar'} />}
    {!img && icon && (
      <RoundedIcon icon={icon} color={color} stroke={`var(--default-color-${color || 'accent'})`} />
    )}
    <Content>
      {label && <Label stretch={stretch}>{label}</Label>}

      {tooltip ? (
        <Tooltip place={'top'} text={tooltip}>
          <Row>{getValue(label, text)}</Row>
        </Tooltip>
      ) : (
        <Row>{getValue(label, text)}</Row>
      )}
    </Content>
  </Wrap>
)

export default Difinition
