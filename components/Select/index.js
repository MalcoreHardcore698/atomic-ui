import React from 'react'
import styled from 'styled-components'
import AsyncSelect, { components } from 'react-select'

export const Wrap = styled.div`
  min-width: 128px;
`

const surface = {
  background: 'white',
  border: 'var(--surface-border)',
  boxShadow: 'var(--surface-shadow)',
  borderRadius: 'var(--surface-border-radius)'
}

const ghost = {
  background: 'var(--input-background)',
  border: 'none',
  boxShadow: 'none',
  borderRadius: 'var(--surface-border-radius)'
}

const font = {
  fontSize: 'var(--font-size-m)',
  fontWeight: 'var(--font-weight-regular)',
  fontFamily: 'var(--font-family)'
}

export const Menu = (props) => {
  return (
    <div className="ui-select-menu">
      <components.Menu {...props}>{props.children}</components.Menu>
    </div>
  )
}

export const Select = ({ appearance, className, style, ...props }) => (
  <Wrap className={className} style={style}>
    <AsyncSelect
      {...props}
      styles={{
        control: (provided, state) => ({
          ...provided,
          ...(appearance === 'ghost' ? ghost : surface),
          ...(state.isDisabled
            ? {
                background: 'var(--default-disabled)',
                borderColor: 'var(--default-disabled)'
              }
            : {}),
          ...font,
          minHeight: '38px',
          padding: '0 5px',
          color: state.isFocused
            ? 'var(--default-color-accent)'
            : appearance === 'ghost'
            ? 'var(--input-color)'
            : 'var(--ghost-color-text)',
          cursor: 'pointer',
          transition: 'all 150ms ease'
        }),
        valueContainer: (provided) => ({
          ...provided,
          padding: '5px'
        }),
        singleValue: (provided, state) => ({
          ...provided,
          ...(appearance === 'ghost' ? ghost : surface),
          ...font,
          background: 'none',
          color: state.isFocused
            ? 'var(--default-color-accent)'
            : state.isDisabled
            ? 'var(--ghost-color-text)'
            : appearance === 'ghost'
            ? 'var(--input-color)'
            : 'var(--ghost-color-text)',
          transition: 'all 150ms ease'
        }),
        placeholder: (provided, state) => ({
          ...provided,
          color: state.isFocused
            ? 'var(--default-color-accent)'
            : appearance === 'ghost'
            ? 'var(--input-placeholder-color)'
            : 'var(--ghost-color-text)',
          transition: 'all 150ms ease'
        }),
        menu: (provided) => ({
          ...provided,
          ...surface,
          boxShadow: 'var(--default-shadow)',
          zIndex: 'var(--z-102)',
          ...font
        }),
        option: (provided, state) => ({
          ...provided,
          ...font,
          color: state.isFocused
            ? 'var(--default-color-accent)'
            : appearance === 'ghost'
            ? 'var(--input-color)'
            : 'rgba(0, 0, 0, 75%)',
          background: 'none !important',
          cursor: 'pointer',
          transition: 'all 150ms ease'
        }),
        multiValue: (provided) => ({
          ...provided,
          borderRadius: '5px',
          background: 'var(--default-color-accent)',
          color: 'white'
        }),
        multiValueLabel: (provided) => ({
          ...provided,
          ...font,
          color: 'white',
          fontSize: 'var(--font-size-xs)'
        })
      }}
      components={{ Menu }}
    />
  </Wrap>
)

export default Select
