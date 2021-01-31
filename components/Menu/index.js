import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../Row'
import Column from '../Column'
import Button from '../Button'
import Text from '../Text'
import Icon from '../Icon'
import Divider from '../Divider'

export const Wrap = styled(Column)`
  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      border: 1px solid var(--surface-border);
      background: var(--surface-background);
      box-shadow: var(--surface-shadow);
      border-radius: var(--surface-border-radius);
    `}

  ${({ appearance }) =>
    appearance === 'clear' &&
    css`
      padding: 0;
      border: none;
      background: none;
      border-radius: 0;
      box-shadow: none;
    `}
`

export const Header = styled(Row)`
  justify-content: space-between;
  align-items: center;
  font-weight: var(--font-weight-medium);
  padding: var(--default-gap) var(--default-gap) 0 var(--default-gap);
  line-height: 1;
`

export const ManageButton = styled(Button)`
  color: var(--default-color-accent);
`

export const ManageRow = styled(Row)`
  grid-gap: 0;
  align-items: center;

  span {
    font-weight: var(--font-weight-medium);
  }
`

export const DangerButton = styled(Button)`
  color: var(--default-color-red);
`

export const List = styled(Column)`
  text-align: left;
  align-items: flex-start;
  padding: 0 var(--default-gap) var(--default-gap) var(--default-gap);

  button {
    font-weight: var(--font-weight-medium);
    text-align: inherit;
  }
`

export const Menu = ({ links, header, className, style, listStyle }) => (
  <Wrap className={className} style={style}>
    {header && (
      <React.Fragment>
        <Header>
          <Text>{header.title}</Text>
          {header.link && (
            <ManageButton appearance={'clear'} onClick={header.link.onClick}>
              <ManageRow>
                <span>{header.link.text}</span>
                <Icon icon={'arrowRight'} size={'xs'} stroke={'var(--default-color-accent)'} />
              </ManageRow>
            </ManageButton>
          )}
        </Header>

        <Divider clear />
      </React.Fragment>
    )}

    {links && links.length && (
      <List style={listStyle}>
        {links.map((link, index) =>
          link !== 'danger' ? (
            <Button
              key={index}
              style={{ color: link.active ? 'var(--default-color-accent)' : 'black' }}
              appearance={'clear'}
              onClick={link.onClick}>
              {link.text}
            </Button>
          ) : (
            <DangerButton key={index} appearance={'clear'} onClick={link.onClick}>
              {link.text}
            </DangerButton>
          )
        )}
      </List>
    )}
  </Wrap>
)

Menu.defaultProps = {
  appearance: 'default'
}

export default Menu
